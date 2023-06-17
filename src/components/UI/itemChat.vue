<template>
    <div class="item-chat">
        
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.item-chat{
    width: 90%;
    height: 120px;
    background-color: #121C14;
    margin: 5px 0;
    border-radius: var(--radius);
    &:hover{
        cursor: pointer;
    }
    &::placeholder{
        font-size: calc(var(--auto-size) * 1);
        text-overflow: ellipsis;
    }
}


</style>