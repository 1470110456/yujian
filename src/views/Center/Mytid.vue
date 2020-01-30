// 我的动态
<template>
  <div>
    我的动态
  </div>
</template>
<script>
// 导入bus实现非父子通信
import bus from '@/bus'
export default {
  // 实现在Center组件创建完成之前就让原来的主页面消失
  beforeMount () {
    bus.$emit('center-child', false)
  },
  // 实现在Center页面之前就让原来的主页面消失
  beforeDestroy () {
    bus.$emit('center-child', true)
  }
}

</script>

<style lang="scss" scoped>
  /**{*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*}*/

</style>
