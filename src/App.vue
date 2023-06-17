<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import themeController from '@/controllers/theme_controller';
import { onMounted, onBeforeMount } from 'vue';
import { io } from 'socket.io-client';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

onBeforeMount(() => {
    const socket = io('http://localhost:3000/');
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
        console.log(`Корочи пошол нахуй!`);
    });
})

onMounted(() => {
    
    // document.body.style.setProperty('--opacity-count', localStorage.getItem(''));
    if(store.state.auth) {
        if(!localStorage.getItem('user_theme')) {
            const jsonObject = JSON.stringify(themeController);
            localStorage.setItem('user_theme', jsonObject);
        }
    } else {
        router.push('/');
        console.log('user not auth or regis');
    }
    configTheme();

    // Вычисление позиции кусрора мыши
    document.body.addEventListener('mousemove', (e) => {
        document.body.style.cssText += `--mouseX: ${e.clientX}px`;
        document.body.style.cssText += `--mouseY: ${e.clientY}px`;
    })

})

function configTheme() {
    const themeObject = JSON.parse(localStorage.getItem('user_theme'));
    const {bgColor, borderColor, textColor, glassEffect} = themeObject;
    // if(bgColor) document.body.style.setProperty('--bgColor', bgColor);
    // if(glassEffect) document.body.style.setProperty('--glass-effect', glassEffect);
    // if(borderColor) document.body.style.setProperty('--border-color', borderColor);
    // if(textColor) document.body.style.setProperty('--text-color', textColor);
    // console.log(typeof Number.parseInt(glassEffect));
    if(bgColor) document.body.style.cssText += `$bgColor: ${bgColor}`
    if(glassEffect) document.body.style.cssText += `$glass-effect: ${Number.parseInt(glassEffect)}`
    if(borderColor) document.body.style.cssText += `$border-color: ${borderColor}`
    if(textColor) document.body.style.cssText += `$text-color: ${textColor}`
}

</script>

<style lang="scss">
$bg: #fff;
$op: 0.1;

:root {
    --auto-size: calc(1vw + 1vh);
    --main-color: #080F09;
    --inner-block-color: #121C14;
    --message-color: #0A7E5B;
    --warning-color: rgb(216, 179, 12);
    --select-message: rgba(77, 77, 77, 0.5);
    --green-light: #;
    --radius: 15px;
    --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    // --opacity-count: 1; // no use
    // --block-color: #182C1B;
    // --border-color: #ffffff;
    // --text-color: #ffffff;
    // --glass-effect: ;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

::selection {
    color: rgb(9, 170, 103);
    background-color: #000000a1;
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;

}

::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0) inset;
    background-color: #111;
    position: absolute;

}

::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 21%);
    background-image: -webkit-gradient(linear, 0 0, 0 100%,
            color-stop(.5, transparent), to(transparent));
    border-radius: 15%;
    position: absolute;

}

::-webkit-scrollbar-thumb:hover {
    background-color: hsl(0, 0%, 20%);
    transition: .3s;
}
</style>