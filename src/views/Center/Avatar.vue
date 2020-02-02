// 头像
<template>
  <div>
    <ul>
      <li class="head" v-show="$store.state.isAvatarShow">
        <img alt="头像商场" class="shop" src="../../iconfont/Shop.jpg">
        <i class="avatarStore"><h3>头像商场</h3></i>
      </li>
    </ul>
    <ul class="father" v-show="$store.state.isAvatarShow">
      <li :key='data.name' class="avatar" v-for='data in avatarList'>
        <img :alt='data.contact.name' :src='data.contact.avatar' @click="getAvatarshopClick($event)">
      </li>
    </ul>
    <router-view/>
  </div>

</template>
<script>
  // 导入头像库
  import avatar from '../../../static/avatar'

  export default {
    data() {
      return {
        // 将头像库中的头像赋予avatarList
        avatarList: avatar
      }
    },
    methods: {
      // 点击图片后转到图片库
      getAvatarshopClick(e) {
        // 转到头像库
        console.log(e.srcElement.src)
        this.$router.push('/center/avatar/avatarshop')
        this.$store.commit('getAvatar', e.srcElement.src)
      }
    },
    beforeMount() {
      // 在加载avatar组件时 实现center页面的隐藏
      this.$store.commit('HideCenterbar', false)
    },
    beforeDestroy() {
      // 在退出avatar组件时 实现center页面的显现
      this.$store.commit('ShowCenterbar', true)
    }
  }

</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .head {
    position: relative;
    background-color: white;
    width: 100%;
    height: 45px;
    margin: 0 0 1px 0;
    border-radius: 0 0 10px 10px;
  }

  .avatarStore {
    position: absolute;
    width: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    color: blue;
    left: 25px;
  }

  .shop {
    width: 40px;
    height: auto;
    position: absolute;
    left: 2px;
    border-radius: 50%;
  }

  /*设置图片库中的图片存储格式*/
  .father {
    width: 100%;
    height: 111px;
    margin: 2px 2px 2px 0;
  }

  .avatar {
    list-style: none;
    float: left;
    height: 100%;
    border: 2px solid #000;
    border-left: 0;
    border-top: 0;

    img {
      height: 100%;
    }
  }
</style>
