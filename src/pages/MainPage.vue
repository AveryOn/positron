<template>

    <div class="main">

        <div class="main__setting">

        </div>

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
            <div class="stick-close" @click="closeChat"></div>
            <!-- ОТРИСОВКА СООБЩЕНИЙ -->
            <div class="chat__inner-block">

                <item-message :messageData="{data: 'Hello world', from: 'me', to: 'friend'}"></item-message>
                <item-message :messageData="{data: 'Hello world', from: 'friend', to: 'me'}"></item-message>
                
            </div>

            <div class="chat__inner-input-block">
                <input-comp 
                class="inner-input-block__input"
                placeholder="text"
                ></input-comp>
                <button-comp class="inner-input-block__btn">Send</button-comp>
            </div>

        </div>

    </div>

</template>

<script lang="ts" setup>
import itemMessage from '@/components/UI/itemMessage.vue';
import {ref} from 'vue';
// gsap
import gsap from 'gsap';


const isOpenSetting = ref(false);


function openChat(){
    const chat = document.querySelector('.main__chat');
    gsap.to('.main__chat', {marginLeft: 20, width: document.body.clientWidth - chat.offsetLeft, duration: 0.3});
    gsap.to('.chat__inner-block', {width: '90%', left: 0, duration: 0.4, delay: 0});
    gsap.to('.inner-input-block__btn', {scale: 1, left: 0, duration: 0.4, delay: 0.3});
    gsap.to('.inner-input-block__input', {scale: 1, left: 0, duration: 0.4, delay: 0.1});
    gsap.to('.stick-close', {scale: 1, right: '10px', duration: 0.4, delay: 0.2});
}
function closeChat(){
    const tl = gsap.timeline();
    tl.to('.inner-input-block__input', {scale: 0, left: '-550px', duration: 0.2, delay: 0});
    tl.to('.inner-input-block__btn', {scale: 0, left: '-550px', duration: 0.2, delay: 0});
    gsap.to('.stick-close', {scale: 0, right: '-600px', duration: 0.3, delay: 0});
    tl.to('.main__chat', {marginLeft: 10, width: '70px', duration: 0.5});
    tl.to('.chat__inner-block', {width: '0', left: '-250px', duration: 0.4, delay: 0});
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

</script>


<style lang="scss" scoped>
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
.main__setting{
    position: absolute;
    left: 0;
    width: 0;
    height: 80%;
    background: rgba(18, 28, 20, 0.75);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    box-shadow: 10px 15px 34px rgba(0, 0, 0, .5);
    z-index: 100;
}
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
    border-radius: var(--radius);
    background-color: var(--inner-block-color);
    overflow-y: auto;
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