// Author:
// Time: 2020-01-21 12:31
// 个人中心视图
<template>
    <div>
      <i class="center" v-show="$store.state.isCenterbarShow">个人中心</i>
      <centerbar v-show="$store.state.isCenterbarShow"></centerbar>
      <em :class="isActive?'avatar':'bigavatar'" @click="getBigAvatar" v-show="$store.state.isCenterbarShow">
        <img :src="getAvatar" alt="头像">
      </em>
      <!--      路由渲染-->
      <router-view/>
    </div>
</template>

<script>

  import centerbar from '@/components/Centerbar'
  import store from '../store/index'

  export default {
    data() {
      return {
        isActive: true
      }
    },
    beforeMount() {
      // 在加载center组件时 实现tabbar和navbar的隐藏
      this.$store.commit('Hidebar', false)
    },
    beforeDestroy() {
      // 在退出center组件时 实现tabbar和navbar的显现
      this.$store.commit('Showbar', true)
    },
    components: {
      centerbar: centerbar
    },
    computed: {
      getAvatar() {
        return store.state.user.avatar.attributes.url
      }
    },
    methods: {
      getBigAvatar() {
        this.isActive = !this.isActive
      }
    }
  }

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .center {
    display: flex;
    font-style: normal;
    font-weight: 700;
    color: #3a3ae3;
    display: block;
    background-color: white;
    height: 55px;
    line-height: 55px;
    margin: 0 0 1px 0;
    border-radius: 0 0 10px 10px;
  }

  .avatar {
    position: fixed;
    right: 30px;
    top: 68px;
    margin: 0;

    img {
      width: 45px;
      height: auto;
      border-radius: 50%;
    }
  }

  .bigavatar {
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    right: 0;
    top: 0;
    /*margin: 0;*/
    background-color: #000;

    img {
      position: absolute;
      top: 23%;
      left: 0;
      width: 100%;
      height: 360px;
      /*border-radius: 50%;*/
    }
  }
</style>
