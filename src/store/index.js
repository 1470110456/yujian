import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局状态存储的地方
  state: {
    // 顶部导航栏显示的名称的状态
    whereHere: ''
  },
  // 状态修改的唯一地方！
  mutations: {
    // 动态修改状态
    ansWhere (state, where) {
      state.whereHere = where
    }
  },
  // 涉及到异步操作请用action
  actions: {},
  modules: {}
})
