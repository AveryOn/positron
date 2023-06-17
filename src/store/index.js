import { createStore } from 'vuex';

import theme from './modules/theme_module';

export default createStore({
    state: {
        auth: true,
    },
    getters: {
        returnState(state) {
            console.log(state);
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        theme: theme
    }
})
