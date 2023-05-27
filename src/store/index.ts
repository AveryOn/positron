import { createStore } from 'vuex'

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
  }
})
