<template>
  <div>
    <!--在router中定义的路径下所显示的组件，会被填充到router-view中显示-->
    <router-view/>
    <navbar  v-if='isLogined' v-show="isShow"/>
    <tabbar  v-if='isLogined' v-show="isShow"/>
  </div>
</template>

<script>
import store from './store/index'
import tabbar from './components/Tabbar'
import navbar from './components/Navbar'
// 导入总线实现非父子通信
import bus from '@/bus'

export default {
  data () {
    return {
      // 实现yujian主页面的隐藏
      isShow: true
    }
  },
  methods: {},
  computed: {
    isLogined () {
      return store.state.user !== null
    }
  },
  // 子组件的引入
  components: {
    tabbar: tabbar,
    navbar: navbar
  },
  // 为根组件未创建完之前实现数据传输，将主页面显示出来
  beforeMount () {
    bus.$on('self', (data) => {
      this.isShow = data
    })
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
