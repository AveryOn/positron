<template>

    <input class="input" type="text" :value="modelValue" @input="e => $emit('update:modelValue', e.target.value)" :placeholder="placeholder">

</template>
<script lang="ts">
export default {
    name: 'input-comp',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        placeholder: [String]
    },
    methods: {
        // ЭТО НЕ РАБОТАЛО ПО КАКОЙ-ТО ПРИЧИНЕ
        // updateValue(e:e){
        //     this.$emit('update:modelValue', e.target.value);
        // }
    }
}
</script>
<style lang="scss" scoped>
.input {
    background-color: rgba($color: #121C14, $alpha: 1.0);
    width: 500px;
    height: 50px;
    color: rgba($color: #fff, $alpha: 1);
    outline: rgba($color: #000000, $alpha: .0);
    border: rgba($color: #000000, $alpha: .0);
    border-radius: var(--radius);
    font-family: var(--font-family);
    padding: 20px;
    
}
</style>