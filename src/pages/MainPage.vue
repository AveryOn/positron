<template>
    <div class="main">
        <!-- <errorComp>Error</errorComp> -->
        <SettingsVIew v-show="isOpenSetting" class="main__setting">
            
        </SettingsVIew>

        <nav class="main__navbar">
            <!-- Кнопка Настройки -->
            <button class="navbar__btn" @click="openSetting">{{ (isOpenSetting)? '<=' : '=>'}}</button>
        </nav>

        <div class="main__board-chats">
            <item-chat v-for="i in 3" @click="openChat"></item-chat>
        </div>

        <div 
        class="main__chat"
        :style="{ width: '70px', marginLeft: '10px'}"        
        >
            <!-- Счетчик, отображает кол-во выбранных сообщений  -->
            <p class="counter-messages" v-show="selectMessages.length">Selected messages: {{ selectMessages.length }}</p>

            <div class="stick-close" @click="closeChat"></div>
            <!-- ОТРИСОВКА СООБЩЕНИЙ -->
            <div class="chat__inner-block">

                <!-- Текст если нет сообщений -->
                <h2 
                class="chat__no-messages-hint"
                v-show="!messages.length"
                >
                    No messages
                </h2>
                <itemMessage 
                v-for="message of messages" 
                :messageData="message"
                :key="message.id"
                :id="message.id"
                @selectMessage="addSelectMessages"
                >
                </itemMessage>
                
            </div>

            <div class="chat__inner-input-block">

                <!-- ВВОД СООБЩЕНИЯ -->
                <input-comp 
                class="inner-input-block__input"
                placeholder="text"
                v-model="messageText"
                @keyup.enter="sendMessage"
                ></input-comp>

                <!-- КНОПКА ОТПРАВКИ СООБЩЕНИЯ -->
                <button-comp 
                class="inner-input-block__btn"
                @click="sendMessage"
                >
                    Send
                </button-comp>
            </div>

        </div>

    </div>
</template>

<script setup>
import itemMessage from '@/components/UI/itemMessage.vue';
import SettingsVIew from '@/components/SettingsVIew.vue';
import { ref, watch } from 'vue';
// gsap
import gsap from 'gsap';

const isOpenSetting = ref(false);
const isOpenChat = ref(false);
const messageText = ref('');
const selectMessages = ref([]);
const messages = ref([
    // {id: 121231241, data: 'Hello', fromMe: true},
])

// varriables for custom themes ...

function openChat(){
    isOpenChat.value = true;
    const chat = document.querySelector('.main__chat');
    gsap.to('.main__chat', {marginLeft: 20, width: document.body.clientWidth - chat.offsetLeft, duration: 0.3});
    gsap.to('.chat__inner-block', {width: '90%', left: 0, duration: 0.4, delay: 0});
    gsap.to('.inner-input-block__btn', {scale: 1, left: 0, duration: 0.4, delay: 0.3});
    gsap.to('.inner-input-block__input', {scale: 1, left: 0, duration: 0.4, delay: 0.1});
    gsap.to('.stick-close', {scale: 1, right: '10px', duration: 0.4, delay: 0.2});
    gsap.to('.item-message', {scale: 1, duration: 0.3, delay: 0.2})
    gsap.to('.chat__no-messages-hint', {left: 0, scale: 1, duration: 0.3, delay: 0.2})
}
function closeChat(){
    isOpenChat.value = true;
    const tl = gsap.timeline();
    tl.to('.inner-input-block__input', {scale: 0, left: '-550px', duration: 0.2, delay: 0});
    tl.to('.inner-input-block__btn', {scale: 0, left: '-550px', duration: 0.2, delay: 0});
    gsap.to('.item-message', {scale: 0, duration: 0.2})
    gsap.to('.stick-close', {scale: 0, right: '-600px', duration: 0.3, delay: 0});
    tl.to('.main__chat', {marginLeft: 10, width: '70px', duration: 0.5});
    tl.to('.chat__inner-block', {width: '0', left: '-250px', duration: 0.4, delay: 0});
    gsap.to('.chat__no-messages-hint', {left: '-80%', scale: 0, duration: 0.3, delay: 0.3})
}
function openSetting(){
    if(!isOpenSetting.value){
        isOpenSetting.value = true;
        gsap.to('.main__setting', {left: '80px', width: '60%', duration: 0.5})
    }else{
        isOpenSetting.value = false;
        gsap.to('.main__setting', {left: '0', width: '0', duration: 0.5})
    }
}
function sendMessage(){
    const newMessage = {
        id: Date.now(),
        data: messageText.value,
        fromMe: true,
    }
    messages.value.push(newMessage);
    messageText.value = ''
    const innerBlock = document.querySelector('.chat__inner-block');
    setTimeout(() => {
        innerBlock.scroll({
            top: innerBlock.scrollHeight,
            behavior: "smooth",
        });
    }, 10)
}

// Добавляет выбранные сообщения в массив
function addSelectMessages(bool, message){
    // Если сообщение кликнуто, то оно добавляется в массив, если снова произошло 
    // нажатие на сообщение то оно исключается из массива
    if(bool){
        selectMessages.value.push(message)
    }else{
        selectMessages.value.splice(selectMessages.value.indexOf(message), 1);
    }
}

</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--message-color);
  background-image: -webkit-gradient(linear, 0 0, 0 100%,
  color-stop(.5, transparent), to(transparent));
  border-radius: 15%;
  position: absolute;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #0a7e5b8e;
  transition: .3s;
}
.main{
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: max-content;
    background-color: var(--main-color);
}
// .main__setting{
//     position: absolute;
//     left: 0;
//     width: 0;
//     height: 80%;
//     background: rgba(18, 28, 20, 0.75);
//     backdrop-filter: blur(5px);
//     border-radius: 15px;
//     box-shadow: 10px 15px 34px rgba(0, 0, 0, .5);
//     z-index: 100;
// }
.main__navbar{
    height: max-content;
    min-width: 50px;
    width: max-content;
    display: flex;
    flex-direction: column;
    margin: 5px;
}
.navbar__btn{
    width: 60px;
    height: 60px;
    border-radius: var(--radius);
    background-color: #182C1B;
    outline: rgba(0, 0, 0, 0);
    border: none;
    margin: 5px 10px;
    font-size: 1.2em;
    font-weight: 600;
    &:hover{
        cursor: pointer;
    }
}
.main__board-chats{
    width: 30%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--block-color);
    background-color: rgba($color: var(--block-color), $alpha: var(--glass-effect));
    border-radius: var(--radius);
    padding: 10px 0;
}
.main__chat{
    // width: 940px;
    // width: 70px;
    position: relative;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;    
    background-color: var(--block-color);
    border-radius: var(--radius);
    margin-right: 10px;
    overflow: hidden;
}
.counter-messages{
    position: absolute;
    align-self: flex-start;
    left: 30px;
    top: 5px;
    color: #ac2d1d;
    font-weight: bolder;
    font-size: calc(var(--auto-size) * 0.9);
    font-family: sans-serif;
}
.chat__no-messages-hint{
    position: relative;
    left: -80%;
    font-size: calc(var(--auto-size) * 2);
    margin: auto;
    color: #ac2d1d;
    // зеленый цв. 
    // color: #0cbb87;
}
.stick-close{
    position: absolute;
    width: 100px;
    max-width: 100px;
    right: -600px;
    scale: 0;
    top: 7px;
    height: 15px;
    border-radius: var(--radius);
    background-color: var(--message-color);
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
}
.chat__inner-block{
    position: relative;
    display: flex;
    flex-direction: column;
    left: -250px;
    width: 0%;
    height: 85%;
    max-height: 85%;
    margin: 30px 0 0 0;
    padding: 10px;
    border-radius: var(--radius);
    background-color: var(--inner-block-color);
    overflow-y: auto;
    overflow-x: hidden;
}
.chat__inner-input-block{
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    .inner-input-block__input{
        position: relative;
        left: -250px;
        scale: 0;
        margin: 0 5px;
        width: calc(var(--auto-size) * 22);
        height: calc(var(--auto-size) * 1.8);
    }
    .inner-input-block__btn{
        position: relative;
        left: -250px;
        scale: 0;
        margin: 0 5px;
        width: calc(var(--auto-size) * 4);
        height: calc(var(--auto-size) * 2);
        font-size: calc(var(--auto-size) * 0.9);
    }
}

</style>