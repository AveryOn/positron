import { useStore } from 'vuex';
import { computed} from 'vue';
const pluginStateObject = {
    parse: function () {
        const store = useStore();
        function parseState() {
            let dynamic_array = Object
                .keys(store.state)
                .map(
                    it => [it, computed(() => store.state[it])]
                )
            return Object.fromEntries(dynamic_array);
        }
    }
}



export {pluginStateObject}