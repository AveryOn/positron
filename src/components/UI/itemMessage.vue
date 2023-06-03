<template>
    <div 
    class="item-message"
    :style="{marginLeft: (messageData.messageData.from === 'me')? 'auto' : ''}"
    >
        {{ messageData.messageData.data }}
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
const messageData = defineProps<{
    messageData: Object
}>()
onMounted(() => {
    console.log(JSON.stringify(messageData));
    
})

</script>
<style lang="scss" scoped>
.item-message{
    max-width: 45%;
    min-width: 8%;
    width: max-content;
    background-color: var(--message-color);
    padding: 2px 15px;
    border-radius: var(--radius);
}

</style>