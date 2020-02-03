// 个人信息
<template>
  <div>
    个人信息
  </div>
</template>
<script>

export default {
  beforeMount () {
    // 在加载avatar组件时 实现center页面的隐藏
    this.$store.commit('HideCenterbar', false)
  },
  beforeDestroy () {
    // 在退出avatar组件时 实现center页面的显现
    this.$store.commit('ShowCenterbar', true)
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
