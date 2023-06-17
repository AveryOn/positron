<template>
    <div 
    class="item-message-container"
    @click.ctrl="selectMessage"
    :style="(isSelect)? {backgroundColor: 'var(--select-message)'} : {backgroundColor: ''}"
    >
        <!-- Метаданные сообщения -->
        <messageInfo v-show="isShowMessageInfo" :messageMetaData="messageMetaData"></messageInfo>
        <div 
        class="item-message"
        :style="{marginLeft: (props.messageData.fromMe)? 'auto' : ''}"
        >
            <p class="item-message__content-text">
                {{ props.messageData.data }}
            </p>
        </div>
    </div>
</template>

<script setup>
import messageInfo from '@/components/UI/messageInfoComp.vue';
import { ref, onMounted, watch } from 'vue';
const props = defineProps({
    messageData: {
        type: Object,
        default: { id: 0, data: '', fromMe: true }
    },
});
const emit = defineEmits(['selectMessage']);

const isSelect = ref(false)
const isShowMessageInfo = ref(false);
const messageMetaData = {
    id: props.messageData.id, 
    data: props.messageData,
};

function selectMessage(){
    isSelect.value = !isSelect.value
    emit('selectMessage', isSelect.value, props.messageData);
}

</script>

<style lang="scss" scoped>
.item-message-container{
    width: 100%;
    padding: 5px;
    border-radius: 20px;
    margin-top: 1px;
}
.item-message{
    max-width: 45%;
    min-width: 8%;
    width: max-content;
    background-color: var(--message-color);
    padding: 2px 15px;
    border-radius: var(--radius);
    word-wrap: break-word;
    cursor: pointer;
}

</style>