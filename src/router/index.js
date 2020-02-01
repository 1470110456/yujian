import Vue from 'vue'
// import store from '../store'
import VueRouter from 'vue-router'
import MsgList from '../views/MsgList'
import YuJian from '../views/YuJian'
import Things from '../views/Things'
// 导入Center组件
import Center from '../views/Center'
// 导入Center组件中的avatar头像组件
import Avatar from '../views/Center/Avatar'
// 导入Center组件中的mytid我的动态组件
import Mytid from '../views/Center/Mytid'
// 导入Center组件中的avatar个人说明组件
import Perdecri from '../views/Center/Perdecri'
// 导入Center组件中的avatar个人信息组件
import Perinfo from '../views/Center/Perinfo'
// 导入avatar组件中的头像库组件
import Avatarshop from '../views/Center/Avatar/Avatarshop'
import ChatRoom from '../views/ChatRoom'
import Login from '../views/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由模式：hash，另外一种是history模式，具体有何区别请查阅文档
  mode: 'hash',
  base: process.env.BASE_URL,

  routes: [
    // 以下是对路由的定义
    {
      path: '/login',
      component: Login
    },
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
    // 默认初始界面是语见的界面，除了上面已经定义路径，其他路径会被重定向到语见的界面
    {
      path: '*',
      redirect: '/yujian'
    }
  ]
})
// 修改路由的push函数
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
// 定义全局路由守卫
// 判断是否登录，若未登录，会先跳转到登录页面
// router.beforeEach((to, from, next) => {
//   if (store.state.user === null) {
//     console.log('Have not login, please login first.')
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
