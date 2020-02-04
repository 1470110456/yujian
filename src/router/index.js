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
// 导入Center组件中的perinfo 个人信息的组件
import Perinfo from '../views/Center/Perinfo'
// 导入avatar组件中的头像库的组件
import Avatarshop from '../views/Center/Avatar/Avatarshop'
import ChatRoom from '../views/ChatRoom'
import Login from '../views/Login'
// 引入两个二级子组件 +1
import TheBelt from '../views/YuJian/TheBelt'
import TheRoad from '../views/YuJian/TheRoad'
import thingsroom from '../views/thingsroom'
// 引入六个三级子组件（一带）
import Germany from '../views/YuJian/TheBeltCountry/Germany'
import Iran from '../views/YuJian/TheBeltCountry/Iran'
import Italy from '../views/YuJian/TheBeltCountry/Italy'
import Netherlands from '../views/YuJian/TheBeltCountry/Netherlands'
import Russia from '../views/YuJian/TheBeltCountry/Russia'
import Turkey from '../views/YuJian/TheBeltCountry/Turkey'
// 引入六个三级子组件（一路）
import Greece from '../views/YuJian/TheRoadCountry/Greece'
import India from '../views/YuJian/TheRoadCountry/India'
import Indonesia from '../views/YuJian/TheRoadCountry/Indonesia'
import Kenya from '../views/YuJian/TheRoadCountry/Kenya'
import Malaysia from '../views/YuJian/TheRoadCountry/Malaysia'
import Vietnam from '../views/YuJian/TheRoadCountry/Vietnam'

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
      component: Things,
      // 动态详情页
      children: [
        {
          path: '/things/thingsroom',
          component: thingsroom
        }
      ]
    },
    {
      path: '/yujian',
      component: YuJian,
      // 定义YuJian下的子组件(一带一路)
      children: [
        {
          path: '/YuJian/TheBelt',
          component: TheBelt,
          // 定义TheBelt下的子组件
          children: [
            {
              path: '/YuJian/TheBeltCountry/Germany',
              component: Germany
            },
            {
              path: '/YuJian/TheBeltCountry/Iran',
              component: Iran
            },
            {
              path: '/YuJian/TheBeltCountry/Italy',
              component: Italy
            },
            {
              path: '/YuJian/TheBeltCountry/Netherlands',
              component: Netherlands
            },
            {
              path: '/YuJian/TheBeltCountry/Russia',
              component: Russia
            },
            {
              path: '/YuJian/TheBeltCountry/Turkey',
              component: Turkey
            }
            // 三级路由重定向
            // {
            // path: '/',
            // redirect: '/YuJian/TheBeltCountry/Iran'
            // }
          ]
        },
        {
          path: '/YuJian/TheRoad',
          component: TheRoad,
          // 定义TheRoad下的子组件
          children: [
            {
              path: '/YuJian/TheRoadCountry/Greece',
              component: Greece
            },
            {
              path: '/YuJian/TheRoadCountry/India',
              component: India
            },
            {
              path: '/YuJian/TheRoadCountry/Indonesia',
              component: Indonesia
            },
            {
              path: '/YuJian/TheRoadCountry/Kenya',
              component: Kenya
            },
            {
              path: '/YuJian/TheRoadCountry/Malaysia',
              component: Malaysia
            },
            {
              path: 'Yujian/TheRoadCountry/Vietnam',
              component: Vietnam
            }
            // 三级路由重定向
            // {
            // path: '/',
            // redirect: '/Yujian/TheRoadCountry/Greece'
            // }
          ]
        },
        //   二级路由重定向
        {
          path: '/',
          redirect: '/YuJian/TheBelt'
        }
      ]
    },
    // 定义center的组件
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
