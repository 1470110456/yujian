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
import AV from 'leancloud-storage'

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
        router.replace('/yujian')
      } else {
        store.dispatch('login',
          {
            username: this.username,
            password: this.password
          })
      }
    },
    onLogoutClick () {
      if (AV.User.current() === null) {
        console.log('-------------------------------------------')
        console.log('|' + 'There is no user, so you can not logout !' + '|')
        console.log('-------------------------------------------')
      } else {
        // 登出即时通讯服务器
        store.state.imClient.close().then(function () {
          // 将全局保存的IMClient设置为空
          store.commit('setClient', undefined)
          console.log('-----------------------')
          console.log('|' + 'Realtime out success.' + '|')
          console.log('-----------------------')
          // 登出数据存储服务器
          AV.User.logOut().then(() => {
            console.log('-----------------')
            console.log('|' + 'Logout success.' + '|')
            console.log('-----------------')
          }).catch(console.error)
        }).catch(console.error)
      }
    }
  }
}
</script>

<style scoped>

</style>
