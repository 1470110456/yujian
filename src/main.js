import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { appId, appKey, serverURLs } from './leancloud' // 富媒体消息插件
// 导入Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' // LeanCloud 配置信息
const { Realtime, Event } = require('leancloud-realtime') // LeanCloud 数据存储
const AV = require('leancloud-storage') // LeanCloud 即时通讯
const TypedMessagesPlugin = require('leancloud-realtime-plugin-typed-messages')

Vue.use(MintUI)

// 生产环境提示，在开发环境下false就好
Vue.config.productionTip = false

// leanCloud 初始化
AV.init({
  appId: appId,
  appKey: appKey,
  serverURLs: serverURLs
})
// 以下日志功能，发布时应关闭，否则会泄露敏感数据
// 为LeanCloud启用日志
localStorage.setItem('debug', 'leancloud*')
// 为即时通讯、 LiveQuery 启用日志
localStorage.setItem('debug', 'LC*')

// 即时通讯初始化
export const realtime = new Realtime({
  appId: appId,
  appKey: appKey,
  server: serverURLs,
  plugins: [TypedMessagesPlugin, Event]
})

// 登陆判断
// 先直接登录用户名为1，密码为1的用户，登录组件开发完后去除，仅用于测试
// if (AV.User.current() === null) {
//   console.log('Current user is null, start login......')
//   AV.User.logIn('1', '1').then(function (user) {
//     console.log('Login success.' + user.getUsername())
//     store.commit('setUser', user)
//   }).catch(console.error)
// } else {
//   console.log('There are already a user, current user is' + AV.User.current().get('name'))
// }

// 判断是否登录
if (store.state.user === null) {
  router.push('/login')
} else {
  store.commit('setUser', AV.User.current())
  realtime.createIMClient(AV.User.current()).then(() => {
    console.log('Realtime success.')
  }).catch(console.error)
}
// 登录即时通讯服务器
// realtime.createIMClient(AV.User.current()).then(() => console.log('Realtime login success.')).catch(console.error)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
