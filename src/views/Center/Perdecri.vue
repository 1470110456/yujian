// 个人描述
<template>
  <div>
    个人描述
  </div>
</template>
<script>
// 导入bus实现非父子通信
import bus from '@/bus'

export default {
  // 实现在mytid组件创建完成之前就让center的主页面消失
  beforeMount () {
    bus.$emit('center-child', false)
  },
  // 实现退出mytid页面之后 就让center的主页面出现
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
  //
</style>
