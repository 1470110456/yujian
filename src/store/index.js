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
    isAvatarShow: true,
    // 创建name 修改昵称功能的呈现
    isNameCreate: true,
    // 创建sex 设置性别功能的呈现
    isSexCreate: false,
    // 创建sex 设置个人描述功能的呈现
    isDeriCreate: false
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
    // 实现avatar组件的隐藏
    HideAvatar(state, data) {
      state.isAvatarShow = data
    },
    // 实现avatar组件的显现
    ShowAvatar(state, data) {
      state.isAvatarShow = data
    },
    // 实现修改名称功能的显现
    ShowName(state, data) {
      state.isNameCreate = data
    },
    // 实现修改名称功能的显现
    HideName(state, data) {
      state.isNameCreate = data
    },
    // 实现修改名称功能的显现
    ShowSex(state, data) {
      state.isSexCreate = data
    },
    // 实现修改名称功能的显现
    HideSex(state, data) {
      state.isSexCreate = data
    },
    // 实现修改名称功能的显现
    ShowDeri(state, data) {
      state.isDeriCreate = data
    },
    // 实现修改名称功能的显现
    HideDeri(state, data) {
      state.isDeriCreate = data
    }
  },
  // 涉及到异步操作请用action
  actions: {},
  modules: {}
})
