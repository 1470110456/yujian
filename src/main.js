import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import anime from 'animejs' // 动画库 Anime.js
import leanStore from 'leancloud-storage' // LeanCloud 数据存储
import leanReal from 'leancloud-realtime' // LeanCloud 即时通讯

Vue.config.productionTip = false

// leanCloud 初始化
var AV = leanStore.init({
  appId: '9gJQmAMDjVmoOfPzdcMjBYgQ-MdYXbMMI',
  appKey: 'PMYUj8hJI01l14WssTal0Tmf',
  serverURLs: 'https://api.rekonti.com'
})

// 以下日志功能，发布时应关闭，否则会泄露敏感数据
// 为LeanCloud启用日志
localStorage.setItem('debug', 'leancloud*')

// 为即时通讯、 LiveQuery 启用日志
localStorage.setItem('debug', 'LC*')

new Vue({
  anime,
  router,
  store,
  AV,
  leanReal,
  render: h => h(App)
}).$mount('#app')
