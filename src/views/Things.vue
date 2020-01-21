// Author:
// Time: 2020-01-21 12:31
// 动态视图
<template>
  <div>
    Things
  </div>
</template>

<script>
export default {
  mounted () {
    // 将当前视图的名称发送到ansWhere的mutation中，以动态修改顶部导航栏显示名称
    this.$store.commit('ansWhere', '动态')
  }
}
</script>

<style scoped>

</style>
