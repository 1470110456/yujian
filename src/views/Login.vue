<template>
  <div>
    UserName :
    <label>
    <input type='text' v-model='username'/>
    </label>
    <br/>
    Password :
    <label>
    <input type='password' v-model='password'/>
    </label>
    <br/>
    <button @click='onLoginClick()'>lOGIN</button>
    <button @click='onLogoutClick()'>LOGOUT</button>
  </div>
</template>

<script>
import store from '../store'
import router from '../router'
const AV = require('leancloud-storage')
const { realtime } = require('../leancloud')

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLoginClick () {
      if (AV.User.current() !== null) {
        console.log('--------------------------------------------------')
        console.log('|' + 'There is already a user. Current user is :' + AV.User.current().get('name') + '|')
        console.log('--------------------------------------------------')
        router.push('/yujian')
      } else {
        AV.User.logIn(this.username, this.password).then(function (user) {
          // 打印当前用户的名字
          console.log('---------------------------------------')
          console.log('|' + 'Login success, current user is:' + AV.User.current().get('name') + '|')
          console.log('---------------------------------------')
          if (store.state.imClient === undefined) {
            // 登录即时通讯服务器
            realtime.createIMClient(AV.User.current()).then((AVIMClient) => {
              // 将获得的IMClient全局保存
              store.commit('setClient', AVIMClient)
              console.log('-------------------------')
              console.log('|' + 'Realtime login success.' + '|')
              console.log('-------------------------')
              router.push('/yujian')
            }).catch(console.error)
          }
          // 设置头像图片
          store.commit('setAvatar', AV.User.current().attributes.avatar.attributes.url)
        }).catch(console.error)
      }
    },
    onLogoutClick () {
      if (AV.User.current() === null) {
        console.log('-------------------------------------------')
        console.log('|' + 'There is no user, so you can not logout !' + '|')
        console.log('-------------------------------------------')
      } else {
        // 登出数据存储服务器
        AV.User.logOut().then((user) => {
          console.log('-----------------')
          console.log('|' + 'Logout success.' + '|')
          console.log('-----------------')
          // 登出即时通讯服务器
          store.state.imClient.close().then(function () {
            // 将全局保存的IMClient设置为空
            store.commit('setClient', undefined)
            console.log('-----------------------')
            console.log('|' + 'Realtime out success.' + '|')
            console.log('-----------------------')
          }).catch(console.error)
        }).catch(console.error)
      }
    }
  }
}
</script>

<style scoped>

</style>
