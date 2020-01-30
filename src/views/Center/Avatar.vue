// 头像
<template>
  <div>
    我的头像
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
  /*div{*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  display: flex;*/
  /*}*/
  /*li{*/
  /*  display: flex;*/
  /*  list-style: none;*/
  /*  position: relative;*/
  /*  width: 100%;*/
  /*  height: 20px;*/
  /*  background-color: white;*/
  /*  padding:20px 5px;*/
  /*  border-radius: 10px;*/
  /*  margin: 5px;*/
  /*}*/
  /*em{*/
  /*  font-style: normal;*/
  /*  margin: 0 5px;*/
  /*}*/
  /*.word{*/
  /*  position: absolute;*/
  /*  left: 5px;*/
  /*}*/
  /*.pic{*/
  /*  position: absolute;*/
  /*  right: 5px;*/
  /*}*/
</style>
