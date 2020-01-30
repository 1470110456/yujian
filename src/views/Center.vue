// Author:
// Time: 2020-01-21 12:31
// 个人中心视图
<template>
    <div>
        <i class="center" v-show="isShow">个人中心</i>
        <centerbar v-show="isShow"></centerbar>
<!--      路由渲染-->
        <router-view/>
    </div>
</template>

<script>
// import avatar from './Center/Avatar'
// import mytid from './Center/Mytid'
// import perdecri from './Center/Perdecri'
// import perinfo from './Center/Perinfo'
import centerbar from '@/components/Centerbar'
// 导入bus实现非父子通信
import bus from '@/bus'
export default {
  data () {
    return {
      // 实现center主页面的隐藏
      isShow: true
    }
  },
  // 实现在Center组件创建完成之前就让原来的主页面消失
  beforeMount () {
    bus.$emit('self', false)
    bus.$on('center-child', (data) => {
      this.isShow = data
    })
  },
  // 实现在Center页面之前就让原来的主页面消失
  beforeDestroy () {
    bus.$emit('self', true)
  },
  components: {
    centerbar: centerbar
  }
}

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .center{
    display: flex;
    font-style: normal;
    font-weight: 700;
    color: blue;
    display: block;
    background-color: white;
    height: 55px;
    line-height: 55px;
    margin: 0 0 1px 0;
    border-radius: 0 0 10px 10px;
  }
</style>
