// 头像库
<template>
  <div>
    <i class="avatar">
      <button>设为头像</button>
      <img :src="this.$store.state.url">
    </i>
  </div>
</template>
<script>

  export default {
    beforeMount() {
      // 在加载avatar组件时 实现center页面的隐藏
      console.log(this.$store.state.url)
      this.$store.commit('HideAvatar', false)
    },
    beforeDestroy() {
      // 在退出avatar组件时 实现center页面的显现
      this.$store.commit('ShowAvatar', true)
    }
  }

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  button {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    color: #fff;
    border: 2px solid #fff;
    background: rgba(0, 0, 0, 0.5);
  }

  .avatar {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    background-color: #000000;

    img {
      position: absolute;
      top: 23%;
      left: 0;
      width: 100%;
      height: 360px;
    }
  }
</style>
