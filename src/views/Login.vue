<template>
  <div>
    <input type='text' v-model='username'/>UserName :
    <br/>
    <input type='password' v-model='password'/>Password :
    <br/>
    <button @click='onLoginClick()'>lOGIN</button>
    <button @click='onLogoutClick()'>LOGOUT</button>
  </div>
</template>

<script>
import { realtime } from '../main'
import store from '../store/index'
import router from '../router'
const AV = require('leancloud-storage')

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLoginClick () {
      if (store.state.user === null) {
        // 登录数据存储服务器
        AV.User.logIn(this.username, this.password).then(function (user) {
          console.log('---------------------------------------')
          console.log('|' + 'Login success, current user is:' + user.get('name') + '|')
          console.log('---------------------------------------')
          // 登录即时通讯服务器
          realtime.createIMClient(AV.User.current()).then((AVIMClient) => {
            // 将获得的IMClient全局保存
            store.commit('setClient', AVIMClient)
            console.log('-------------------------')
            console.log('|' + 'Realtime login success.' + '|')
            console.log('-------------------------')
          }).catch(console.error)
          // 将当前登录用户全局保存
          store.commit('setUser', user)
        }).catch(console.error)
        router.push('/yujian')
      } else {
        console.log('--------------------------------------------------')
        console.log('|' + 'There is already a user. Current user is :' + store.state.user.name + '|')
        console.log('--------------------------------------------------')
      }
    },
    onLogoutClick () {
      if (store.state.user === null) {
        console.log('-------------------------------------------')
        console.log('|' + 'There is no user, so you can not logout !' + '|')
        console.log('-------------------------------------------')
      } else if (store.state.imClient !== undefined) {
        // 登出数据存储服务器
        AV.User.logOut().then((user) => {
          // 将全局保存的用户设置为空
          store.commit('setUser', null)
          console.log('-----------------')
          console.log('|' + 'Logout success.' + '|')
          console.log('-----------------')
          store.commit('setConversations', [])
          // 登出即时通讯服务器
          store.state.imClient.close().then(function () {
            // 将全局保存的IMClient设置为空
            store.commit('setClient', null)
            console.log('-----------------------')
            console.log('|' + 'Realtime out success.' + '|')
            console.log('-----------------------')
          }).catch(console.error)
        }).catch(console.error)
      } else {
        AV.User.logOut().then(() => {
          console.log('-----------------')
          console.log('|' + 'Logout success.' + '|')
          console.log('-----------------')
          store.commit('setConversations', [])
        }).catch(console.error)
      }
    }
  }
}
</script>

<style scoped>

</style>
