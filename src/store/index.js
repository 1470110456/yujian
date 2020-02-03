import Vue from 'vue'
import Vuex from 'vuex'
import AV from 'leancloud-storage'
const { realtime } = require('../leancloud')
const { IMClient } = require('leancloud-realtime')

// 实例化用户查询
const query = new AV.Query('_User')

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
    // 使用时不必要将所有组件的状态都传到mutation中，只要将要管理的组件的状态传过去即可
    // 例：我想在某个地方显示navbar，那我只需要写 store.commit('setShow', { navbar: true }) 即可
    isShow: {
      tabbar: false,
      navbar: false
    },
    // 对话消息列表
    conversations: [
      // 对话消息对象模板
      // {
      //   id: '',
      //   info: {
      //     lastMsg: '',
      //     lastMsgAt: '',
      //     unreadCount: ''
      //   },
      //   contact: {
      //     name: '',
      //     avatar: ''
      //   }
      // }
    ]
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
    },
    // 设置对话列表
    setConversations (state, conversations) {
      state.conversations.push(conversations)
    },
    // 更新对话列表
    setNewConver (state, newConver) {
      const conversation = state.conversations[newConver.index]
      conversation.info.lastMsg = newConver.lastMsg
      conversation.info.lastMsgAt = newConver.lastMsgAt
      conversation.info.unreadCount++
      state.conversations.splice(newConver.index, 1)
      state.conversations.unshift(conversation)
    }
  },
  // 涉及到异步操作请用action
  actions: {
    // 登录
    login (context, userInfo) {
      AV.User.logIn(userInfo.username, userInfo.password).then(function (user) {
        // 打印当前用户的名字
        console.log('---------------------------------------')
        console.log('|' + 'Login success, current user is:' + AV.User.current().get('name') + '|')
        console.log('---------------------------------------')
        if (context.state.imClient === undefined) {
          // 登录即时通讯服务器
          realtime.createIMClient(AV.User.current()).then((AVIMClient) => {
            // 将获得的IMClient全局保存
            context.commit('setClient', AVIMClient)
            // 查询包含当前用户的conversations
            AVIMClient.getQuery().containedIn('m', [AV.User.current().id])
              .find()
              .then(function (conversations) {
                return context.dispatch('setConversations', conversations)
              })
            // 当前用户被添加至某个对话时的事件
            AVIMClient.on(Event.INVITED,
              function invitedEventHandler (payload, conversation) {
                // 打印参数信息
                console.log(payload)
                // 引入并实例化用户查询
                const query = new AV.Query('_User')
                query.equalTo('objectId', payload.invitedBy)
                  .find()
                  .then((user) => {
                    // 将必要的conversation信息提交至mutation来修改对话消息列表状态
                    context.commit('setConversations',
                      {
                        id: conversation.id,
                        info: {
                          lastMsg: conversation.lastMessage,
                          lastMsgAt: conversation.lastMessageAt,
                          unreadCount: conversation.unreadMessagesCount
                        },
                        contact: {
                          name: user.attributes.name,
                          avatar: user.attributes.avatar.attributes.url
                        }
                      })
                  })
              })
            // 当前用户收到了某一条消息，可以通过响应 Event.MESSAGE 这一事件来处理。
            AVIMClient.on(Event.MESSAGE,
              function (message, conversation) {
                console.log('收到新消息：' + message.text)
                // 获取到本地对应的conversation的索引值
                const index = context.state.conversations.findIndex((c, i, conversations) => {
                  return c.id === conversation.id
                })
                // 将必要信息传递给mutation以修改对应的conversation
                context.commit('setNewConver',
                  {
                    index: index,
                    lastMsg: message.text,
                    lastMsgAt: message.timestamp.toString().slice(6, 24)
                  })
              })
            console.log('-------------------------')
            console.log('|' + 'Realtime login success.' + '|')
            console.log('-------------------------')
          }).catch(console.error)
        }
        // 设置头像图片
        context.commit('setAvatar', AV.User.current().attributes.avatar.attributes.url)
      }).catch(console.error)
    },
    // 设置消息对话列表
    setConversations (context, conversations) {
      // 倒序遍历以截取信息
      for (let c = conversations.length - 1; c >= 0; c--) {
        // 设置查询条件
        query.equalTo('objectId', conversations[c].members[1])
          // 开始查询
          .find()
          .then(function (user) {
            // 将获取的信息提交给mutation, 由它更改对话列表的状态
            context.commit('setConversations',
              {
                id: conversations[c].id,
                info: {
                  lastMsg: conversations[c].lastMessage.text,
                  lastMsgAt: conversations[c].lastMessageAt.toString().slice(16, 24),
                  unreadCount: conversations[c].unreadMessagesCount
                },
                contact: {
                  name: user[0].attributes.name,
                  avatar: user[0].attributes.avatar.attributes.url
                }
              })
          })
      }
    }
  },
  modules: {}
})
