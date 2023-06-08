import { createStore } from 'vuex';

import theme from './modules/theme_module';

export default createStore({
  state: {
    auth: false,
  },
  getters: {
    returnState(state){
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
