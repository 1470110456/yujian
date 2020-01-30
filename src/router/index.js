import Vue from 'vue'
import VueRouter from 'vue-router'
import MsgList from '../views/MsgList'
import YuJian from '../views/YuJian'
import Things from '../views/Things'
import Center from '../views/Center'
import Avatar from '../views/Center/Avatar'
import Mytid from '../views/Center/Mytid'
import Perdecri from '../views/Center/Perdecri'
import Perinfo from '../views/Center/Perinfo'
import ChatRoom from '../views/ChatRoom'

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
      component: Center,
      //  定义center下的子组件
      children: [
        {
          path: '/center/avatar',
          component: Avatar
        },
        {
          path: '/center/mytid',
          component: Mytid
        },
        {
          path: '/center/perdecri',
          component: Perdecri
        },
        {
          path: '/center/perinfo',
          component: Perinfo
        }
      ]
    },
    {
      path: '/ChatRoom',
      component: ChatRoom
    },
    // 默认初始界面是语见的界面，除了上面三个已经定义路径，其他路径会被重定向到语见的界面
    {
      path: '*',
      redirect: '/yujian'
    }
  ]
})

export default router
