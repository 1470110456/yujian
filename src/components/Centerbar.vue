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
        <li @click="nameClick()">
          <em class="word">昵称</em>
          <em id="name">{{getName}}</em>
          <em class="pic">></em>
        </li>
      </ul>
      <!--      性别-->
      <ul class="father">
        <li @click="sexClick()">
          <em class="word">性别</em>
          <em id="sex">{{getSex}}</em>
          <em class="pic">></em>
        </li>
      </ul>
      <!--      路由导向个人描述-->
      <ul class="father">
        <li @click="deriClick()">
          <em class="word">个人描述</em>
          <div id="decri"><p>{{getDecri}}</p></div>
          <em class="pic">></em>
        </li>
      </ul>
      <!--      路由导向我的动态-->
      <ul class="father">
        <router-link tag="li" to="/center/mytid">
          <em class="word">我的动态</em>
          <em class="pic">></em>
        </router-link>
      </ul>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
const AV = require('leancloud-storage')
export default {
  data () {
    return {}
  },
  methods: {
    // 转向perinfo
    nameClick () {
      this.$store.commit('ShowName', true)
      this.$router.push('/center/perinfo')
      // 实现sex样式的的隐藏
      this.$store.commit('HideSex', false)
      // 实现perderi样式的的隐藏
      this.$store.commit('HideDeri', false)
    },
    sexClick () {
      // 实现sex样式的的显现
      this.$store.commit('ShowSex', true)
      // 转向perinfo
      this.$router.push('/center/perinfo')
      // 实现name样式的的隐藏
      this.$store.commit('HideName', false)
      // 实现perderi样式的的隐藏
      this.$store.commit('HideDeri', false)
    },
    deriClick () {
      // 实现sex样式的的显现
      this.$store.commit('ShowDeri', true)
      // 转向perinfo
      this.$router.push('/center/perinfo')
      // 实现name样式的的隐藏
      this.$store.commit('HideName', false)
      // 实现sex样式的的隐藏
      this.$store.commit('HideSex', false)
    }
  },
  computed: {
    getName () {
      return AV.User.current().attributes.name
    },
    getSex () {
      return AV.User.current().attributes.sex
    },
    getDecri () {
      return AV.User.current().attributes.perdecrib.slice(0, 8) + '...'
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

  #sex {
    right: 20px;
  }

  #decri {
    position: absolute;
    right: 22px;
    width: 128px;
    height: 40px;
    bottom: 0;
    background-color: white;
    /*强制在一行内显示*/
    white-space: nowrap;
    overflow: hidden;

    p {
      height: 30px;
      /*width: 100%;*/
      font-size: 16px;
      color: #666666;
    }
  }

  .word {
    left: 5px;
  }

  .pic {
    right: 5px;
  }

</style>
