// Author:
// Time: 2020-01-21 12:31
// 语见视图
<template>
  <div>
    Yujian
  </div>
</template>

<script>
import store from '../store/index'
export default {
  mounted () {
    // 将当前视图的名称发送到ansWhere的mutation中，以动态修改顶部导航栏显示名称
    store.commit('ansWhere', '语见')
  }
}
</script>

<style scoped>

</style>
