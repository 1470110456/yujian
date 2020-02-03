import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import MsgList from '../views/MsgList'
import YuJian from '../views/YuJian'
import Things from '../views/Things'
import Center from '../views/Center'
import ChatRoom from '../views/ChatRoom'
import Login from '../views/Login'
import AV from 'leancloud-storage'

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
      }
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
      }
    },
    {
      path: '/ChatRoom',
      component: ChatRoom,
      // 进入登录页面之前，设置各组件显示状态
      beforeEnter: (to, from, next) => {
        store.commit('setShow', {
          tabbar: false,
          navbar: false
        })
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
// 判断是否登录，若未登录，会先跳转到登录页面
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (AV.User.current() === null) {
    console.log('There is no user, so you are loading to login now......')
    next('/login')
  }
})

export default router
