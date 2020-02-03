import AV from 'leancloud-storage'
const { Realtime, Event } = require('leancloud-realtime') // LeanCloud 即时通讯
const TypedMessagesPlugin = require('leancloud-realtime-plugin-typed-messages') // 富媒体消息插件

const appId = '9gJQmAMDjVmoOfPzdcMjBYgQ-MdYXbMMI'
const appKey = 'PMYUj8hJI01l14WssTal0Tmf'
const serverURLs = 'https://lcapi.rekonti.com'

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

console.log('leancloud')
