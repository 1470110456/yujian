import Vue from 'vue'
import VueRouter from 'vue-router'
import MsgList from '../views/MsgList'
import YuJian from '../views/YuJian'
import Things from '../views/Things'
import Center from '../views/Center'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由模式：hash，另外一种是history模式，具体有何区别请查阅文档
  mode: 'hash',
  base: process.env.BASE_URL,

  routes: [
    // 以下是对路由的定义
    {
      path: '/msglist',
      component: MsgList
    },
    {
      path: '/things',
      component: Things
    },
    {
      path: '/yujian',
      component: YuJian
    },
    {
      path: '/center',
      component: Center
    },
    // 默认初始界面是语见的界面，除了上面三个已经定义路径，其他路径会被重定向到语见的界面
    {
      path: '*',
      redirect: '/yujian'
    }
  ]
})

export default router
