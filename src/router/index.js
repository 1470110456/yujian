import Vue from 'vue'
import VueRouter from 'vue-router'
import MsgList from '../views/MsgList'
import UserCenter from '../views/UserCenter'
import YuJian from '../views/YuJian'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/msglist',
      component: MsgList
    },
    {
      path: '/usercenter',
      component: UserCenter
    },
    {
      path: '/yujian',
      component: YuJian
    },
    {
      path: '*',
      redirect: '/usercenter'
    }
  ]
})

export default router
