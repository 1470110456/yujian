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
    imClient: null,
    // yujian页面导航栏的隐与藏的状态
    isBarShow: true,
    // center页面列表的隐藏的显现的状态
    isCenterbarShow: true,
    // 获取头像路径
    url: '',
    // 头像库的显现
    isAvatarShow: true
  },
  // 状态修改的唯一地方！
  mutations: {
    // 动态修改状态
    ansWhere (state, where) {
      state.whereHere = where
    },
    // 修改当前全局用户
    setUser(state, user) {
      if (user === null) {
        state.user = null
      } else {
        state.user = user.attributes
      }
    },
    // 修改当前IMClient
    setClient(state, client) {
      state.imClient = client
    },
    // 实现Centerbar的隐藏
    HideCenterbar(state, data) {
      state.isCenterbarShow = data
    },
    // 实现Centerbar的显现
    ShowCenterbar(state, data) {
      state.isCenterbarShow = data
    },
    // 实现nav和tabbar的隐藏
    Hidebar(state, data) {
      state.isBarShow = data
    },
    // 实现nav和tab bar的显现
    Showbar(state, data) {
      state.isBarShow = data
    },
    // 获取图片的路径
    getAvatar(state, data) {
      state.url = data
    },
    HideAvatar(state, data) {
      state.isAvatarShow = data
    },
    ShowAvatar(state, data) {
      state.isAvatarShow = data
    }
  },
  // 涉及到异步操作请用action
  actions: {},
  modules: {}
})
