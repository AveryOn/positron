<template>

    <div class="main">

        <div class="main__setting" v-show="isOpenSetting">

        </div>

        <nav class="main__navbar">
            <!-- Кнопка Настройки -->
            <button class="navbar__btn" @click="isOpenSetting = !isOpenSetting">{{ (isOpenSetting)? '<=' : '=>'}}</button>
        </nav>

        <div class="main__board-chats">
            <item-chat v-for="i in 3" @click="openChat"></item-chat>
        </div>

        <div 
        class="main__chat" 
        :style="{ width: sizeChat.width.value +'px', marginLeft: sizeChat.marginLeft.value + 'px'}"        
        >

        </div>

    </div>

</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'

const isOpenSetting = ref(false)
const isOpenChat = ref(false)


let sizeChat = {
    marginLeft: ref(30),
    width: ref(70),

}

const openChat = () => {
    const chat = document.querySelector('.main__chat')
    
    // isOpenChat.value = !isOpenChat.value
    if(document.body.offsetWidth - (chat?.offsetLeft + chat?.offsetWidth) <= 10){
        
    }
    console.log();
    
    sizeChat.marginLeft.value  += 100
}

onMounted(() => {
    // console.log(chat?.offsetLeft + chat?.offsetWidth);
    // console.log(document.body.offsetWidth);
    
})




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
    left: 80px;
    width: 50%;
    height: 80%;
    background: rgba(18, 28, 20, 0.75);
    backdrop-filter: blur(10px);
    border-radius: 15px;
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
    height: 90vh;
    background-color: var(--block-color);
    border-radius: var(--radius);
    // margin-left: 10px;
    margin-right: 10px;
}

</style>