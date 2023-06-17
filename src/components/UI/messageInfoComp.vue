<!-- Компонент Отображает МЕТА-данные выбранного сообщения (Его время создания, вес и т.п) -->
<template>
    <div class="message-info">
        {{ props.messageMetaData.id }} | {{ props.messageMetaData.data.data }}
    </div>
</template>

<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    messageMetaData: Object,
})
</script>

<style lang="scss" scoped>
.message-info{
    position: fixed;
    top: 0;
    left: 0;
    color: aliceblue;
    display: flex;
    background: rgba(42, 43, 43, 0.5);
    backdrop-filter: blur(5px);
    width: 100px;
    height: 50px;
    border-radius: 10px;
    z-index: 99999999;
}
</style>