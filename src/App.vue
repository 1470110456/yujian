<template>
  <div>
    <!--在router中定义的路径下所显示的组件，会被填充到router-view中显示-->
    <router-view/>
    <navbar  v-if='isLogined'/>
    <tabbar  v-if='isLogined'/>
  </div>
</template>

<script>
import store from './store/index'
import tabbar from './components/Tabbar'
import navbar from './components/Navbar'

export default {
  data () {
    return {}
  },
  computed: {
    isLogined () {
      return store.state.user !== null
    }
  },
  // 子组件的引入
  components: {
    tabbar: tabbar,
    navbar: navbar
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
