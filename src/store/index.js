import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局状态存储的地方
  state: {
    // 顶部导航栏显示的名称的状态
    whereHere: '',
    // 全局登录用户
    user: null,
    // 全局IMClient
    imClient: null
  },
  // 状态修改的唯一地方！
  mutations: {
    // 动态修改状态
    ansWhere (state, where) {
      state.whereHere = where
    },
    // 修改当前全局用户
    setUser (state, user) {
      if (user === null) {
        state.user = null
      } else {
        state.user = user.attributes
      }
    },
    // 修改当前IMClient
    setClient (state, client) {
      state.imClient = client
    }
  },
  // 涉及到异步操作请用action
  actions: {},
  modules: {}
})
