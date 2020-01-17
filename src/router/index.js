import Vue from 'vue'
import VueRouter from 'vue-router'
import MsgList from '../views/MsgList'
import YuJian from '../views/YuJian'
import Things from '../views/Things'
import Center from '../views/Center'

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
    {
      path: '*',
      redirect: '/yujian'
    }
  ]
})

export default router
