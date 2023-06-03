// import { computed } from 'vue'
// import { useStore } from 'vuex'



function PosholNaxuiZaebalBlyatSukaEbuchay(useStore: any, computed: any):any {
    const store_: any = useStore();
    const count: any = computed(() => store_.state.auth).value;
    return count;
}

// const ParseStateManager = () : any  => {
//     const store : any = useStore();
//     console.log(store, 'store ->')
//     let dynamic_array : any = Object
//         .keys(store.state)
//         .map(
//             it => [it, computed(() => store.state[it])]
//         )
//     return Object.fromEntries(dynamic_array);
// }

export {PosholNaxuiZaebalBlyatSukaEbuchay};