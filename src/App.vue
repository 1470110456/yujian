<template>
  <div>
    <!--在router中定义的路径下所显示的组件，会被填充到router-view中显示-->
    <router-view/>
    <navbar  v-show='isShow.navbar'/>
    <tabbar  v-show='isShow.tabbar'/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tabbar from './components/Tabbar'
import navbar from './components/Navbar'
import AV from 'leancloud-storage'
import store from './store'
import router from './router'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['isShow'])
  },
  // 子组件的引入
  components: {
    tabbar: tabbar,
    navbar: navbar
  },
  mounted () {
    if (AV.User.current() !== null && store.state.imClient === undefined) {
      store.dispatch('setIMClient', AV.User.current())
      store.commit('setAvatar', AV.User.current().attributes.avatar.attributes.url)
      router.replace('/yujian').catch(console.error)
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: noto sans, sans-serif;
    height: 100%;
    background: whitesmoke;
    text-align: center;
  }
</style>
