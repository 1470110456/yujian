import Vue from 'vue'
import Vuex from 'vuex'
const { IMClient } = require('leancloud-realtime')

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局状态存储的地方
  state: {
    // 顶部导航栏显示的名称的状态
    whereHere: String,
    // 用户头像
    avatar: '../iconfont/personalcenter.svg',
    // 全局IMClient
    imClient: IMClient,
    // 全局组件显示状态管理器
    isShow: {
      tabbar: false,
      navbar: false
    }
  },
  // 状态修改的唯一地方
  mutations: {
    // 设置顶部导航栏显示的名称
    ansWhere (state, where) {
      state.whereHere = where
    },
    // 设置用户头像
    setAvatar (state, avatar) {
      state.avatar = avatar
    },
    // 设置当前IMClient
    setClient (state, client) {
      state.imClient = client
    },
    // 设置组件的显示状态
    setShow (state, component) {
      state.isShow = { ...state.isShow, ...component }
    }
  },
  // 涉及到异步操作请用action
  actions: {},
  modules: {}
})
