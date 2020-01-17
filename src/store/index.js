import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    whereHere: ''
  },
  mutations: {
    ansWhere (state, where) {
      state.whereHere = where
    }
  },
  actions: {},
  modules: {}
})
