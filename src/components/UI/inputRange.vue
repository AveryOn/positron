<template>
    <input class="range" :value="value" :min="min" :max="max" type="range" :step="step">
</template>

<script setup>
defineProps({
    value: {
        type: Number,
        default: 0,
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: Number,
        default: 1
    }
})
</script>

<style lang="scss" scoped>
.range {
    width: 95%;
    height: 7px;
    background-color: rgb(85, 255, 0);
    -webkit-appearance: none;
    border-radius: 20px;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.351);
}

.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    top: -1px;
    background: rgb(88, 181, 42);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transition: all .1s;
    cursor: pointer;

    &:hover {
        width: 18px;
        height: 18px;
    }
}
</style>