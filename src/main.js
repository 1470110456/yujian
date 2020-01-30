import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import leanStore from 'leancloud-storage' // LeanCloud 数据存储
// 导入Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
//
Vue.config.productionTip = false

// leanCloud 初始化函数
function lcInit () {
  leanStore.init({
    appId: '9gJQmAMDjVmoOfPzdcMjBYgQ-MdYXbMMI',
    appKey: 'PMYUj8hJI01l14WssTal0Tmf',
    serverURLs: 'https://lcapi.rekonti.com'
  })
  // 以下日志功能，发布时应关闭，否则会泄露敏感数据
  // 为LeanCloud启用日志
  localStorage.setItem('debug', 'leancloud*')
  // 为即时通讯、 LiveQuery 启用日志
  localStorage.setItem('debug', 'LC*')
}
// 初始化
lcInit()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
