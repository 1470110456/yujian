import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import MsgList from '../views/MsgList'
import YuJian from '../views/YuJian'
import Things from '../views/Things'
// 导入Center组件
import Center from '../views/Center'
// 导入Center组件中的avatar头像组件
import Avatar from '../views/Center/Avatar'
// 导入Center组件中的mytid我的动态组件
import Mytid from '../views/Center/Mytid'
// 导入Center组件中的perinfo 个人信息的组件
import Perinfo from '../views/Center/Perinfo'
// 导入avatar组件中的头像库的组件
import Avatarshop from '../views/Center/Avatar/Avatarshop'
import ChatRoom from '../views/ChatRoom'
import Login from '../views/Login'
import ThingsRoom from '../views/ThingsRoom'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由模式：hash，另外一种是history模式，具体有何区别请查阅文档
  mode: 'hash',
  base: process.env.BASE_URL,

  routes: [
    // 以下是对路由的定义
    {
      path: '/login',
      component: Login,
      // 进入登录页面之前，设置各组件显示状态
      beforeEnter: (to, from, next) => {
        store.commit('setShow', {
          tabbar: false,
          navbar: false
        })
        next()
      }
    },
    {
      path: '/msglist',
      component: MsgList,
      // 进入消息页面之前，设置各组件显示状态
      beforeEnter: (to, from, next) => {
        store.commit('setShow', {
          tabbar: true,
          navbar: true
        })
        next()
      }
    },
    {
      path: '/things',
      component: Things,
      // 进入动态页面之前，设置各组件显示状态
      beforeEnter: (to, from, next) => {
        store.commit('setShow', {
          tabbar: true,
          navbar: true
        })
        next()
      },
      // 动态详情页
      children: [
        {
          path: '/things/thingsroom',
          component: ThingsRoom
        }
      ]
    },
    {
      path: '/yujian',
      component: YuJian,
      // 进入登录页面之前，设置各组件显示状态
      beforeEnter: (to, from, next) => {
        store.commit('setShow', {
          tabbar: true,
          navbar: true
        })
        next()
      }
    },
    // 定义center的组件
    {
      path: '/center',
      component: Center,
      // 进入个人中心页面之前，设置各组件显示状态
      beforeEnter: (to, from, next) => {
        store.commit('setShow', {
          tabbar: true,
          navbar: true
        })
        next()
      },
      //  定义center下的子组件
      children: [
        {
          path: '/center/avatar',
          component: Avatar,
          children: [
            {
              path: '/center/avatar/avatarshop',
              name: 'headShop',
              component: Avatarshop
            }
          ]
        },
        {
          path: '/center/mytid',
          component: Mytid
        },
        {
          path: '/center/perinfo',
          component: Perinfo
        }
      ]
    },
    {
      path: '/chatRoom',
      component: ChatRoom,
      // 进入登录页面之前，设置各组件显示状态
      beforeEnter: (to, from, next) => {
        store.commit('setShow', {
          tabbar: false,
          navbar: true
        })
        // 设置导航栏右边图标
        store.commit('setNavRight', require('../assets/iconfont/more.svg'))
        next()
      }
    },
    // 默认初始界面是登录的界面，除了上面已经定义路径，其他路径会被重定向到登录的界面
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

// 定义全局路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login') {
//     if (AV.User.current() !== null && store.state.imClient === undefined) {
//       store.dispatch('setIMClient', AV.User.current())
//       store.commit('setAvatar', AV.User.current().attributes.avatar.attributes.url)
//       router.replace('/yujian').catch(console.error)
//     }
//   }
//   next()
// })

export default router
