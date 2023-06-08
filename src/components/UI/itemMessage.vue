<template>
    <div 
    class="item-message"
    :style="{marginLeft: (messageData.messageData.from === 'me')? 'auto' : ''}"
    >
        <p class="item-message__content-text">
            {{ messageData.messageData.data }}
        </p>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

const messageData = defineProps({
    messageData: [Object]
});



onMounted(() => {
    
})

</script>
<style lang="scss" scoped>
.item-message{
    scale: 0;
    max-width: 45%;
    min-width: 8%;
    // width: max-content;
    width: 30px;
    background-color: var(--message-color);
    padding: 2px 15px;
    border-radius: var(--radius);
    margin: 5px;
}

</style>