<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script lang="ts">
export default {
    name: 'button-comp'
}
</script>
<style lang="scss" scoped>

.btn {
    width: calc(var(--auto-size) * 5);
    height: calc(var(--auto-size) * 2.2);
    border-radius: 15px;
    background-color: rgba($color: #121C14, $alpha: 1.0);
    color: #0A7E5B;
    font-size: calc(var(--auto-size) * 1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    font-family: var(--font-family);
    outline: rgba($color: #000000, $alpha: .0);
    border: rgba($color: #000000, $alpha: .0);

    &:hover {
        cursor: pointer;
        transition: .4s;
        opacity: .8;
    }
}
</style>