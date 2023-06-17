<template>
    <div class="error-comp">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.error-comp{
    position: fixed;
    right: 50px;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--warning-color);
    font-weight: bolder;
    font-size: 18px;
    z-index: 99999999;
    background-color: rgba(209, 23, 23, .5);
    backdrop-filter: blur(4px);
    width: 200px;
    height: 100px;
    border-radius: 20px;
}
</style>