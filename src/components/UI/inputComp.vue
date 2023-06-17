<template>
    <input 
    class="input" 
    type="text" 
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="updateValue"
    >
</template>

<script setup>
const props = defineProps({
    placeholder: String,
    modelValue: {
        type: [String, Number],
        default: ''
    }
})
const emit = defineEmits(['update:modelValue']);

function updateValue(e){
    emit('update:modelValue', e.target.value);
}

// Пример использования с v-model
// const value = computed({
//     get(){
//         return props.modelValue
//     },
//     set(e){
//         console.log(e);
//         emit('update:modelValue', e);
//     }
// })

</script>

<style lang="scss" scoped>
.input {
    background-color: rgba($color: #121C14, $alpha: 1.0);
    // width: 500px;
    width: calc(var(--auto-size) * 22.5);
    height: calc(var(--auto-size) * 2.2);
    color: rgba($color: #fff, $alpha: 1);
    outline: rgba($color: #000000, $alpha: .0);
    border: rgba($color: #000000, $alpha: .0);
    border-radius: var(--radius);
    font-family: var(--font-family);
    padding: 20px;
    
}
</style>