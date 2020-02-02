//个人中心导航栏
<template>
  <div>
    <ul>
      <ul class="father">
        <!--      路由导向头像-->
        <router-link class="ripple" tag="li" to="/center/avatar">
          <em class="word">头像</em>
          <em class="pic">></em>
        </router-link>
      </ul>
      <!--      昵称-->
      <ul class="father">
        <router-link tag="li" to="/center/name">
          <em class="word">昵称</em>
          <em id="name">{{getName}}</em>
          <em class="pic">></em>
        </router-link>
      </ul>
      <!--      路由导向个人信息-->
      <ul class="father">
        <router-link tag="li" to="/center/perinfo">
          <em class="word">个人信息</em>
          <em class="pic">></em>
        </router-link>
      </ul>

      <!--      路由导向个人描述-->
      <ul class="father">
        <router-link tag="li" to="/center/perdecri">
          <em class="word">个人描述</em>
          <em class="pic">></em>
        </router-link>
      </ul>
      <!--      路由导向我的动态-->
      <ul class="father">
        <router-link tag="li" to="/center/mytid">
          <em class="word">我的动态</em>
          <em class="pic">></em>
        </router-link>
      </ul>
    </ul>
  </div>
</template>

<script>
  const AV = require('leancloud-storage')
export default {
  data() {
    return {}
  },
  computed: {
    getName() {
      return AV.User.current().attributes.name
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .father{
    width: 100%;
    height: 100%;
    display: flex;
  }

  li {
    display: flex;
    list-style: none;
    position: relative;
    width: 100%;
    height: 20px;
    background-color: white;
    padding: 20px 5px;
    border-radius: 10px;
    margin: 5px;
  }

  em {
    font-size: 16px;
    color: black;
    font-weight: 500;
    position: absolute;
    font-style: normal;
    margin: 0 5px;
    font-size: 18px;
  }

  #name {
    right: 17px;
  }

  .word {
    left: 5px;
  }

  .pic {
    right: 5px;
  }

</style>
