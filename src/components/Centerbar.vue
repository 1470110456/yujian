<template>
  <div>
    <ul>
    <div class="father">
<!--      路由导向头像-->
      <router-link active-class="self-ripple" tag="li" to="/center/avatar">
      <!--          <img class='avatar' src="https://randomuser.me/api/portraits/men/20.jpg" alt="头像" />-->
      <em class = "word">头像</em>
      <em class = "pic">></em>
    </router-link>
    </div>
      <!--      路由导向个人信息-->
      <div class="father">
    <router-link active-class="self-ripple" tag="li" to="/center/perinfo">
      <em class = "word">个人信息</em>
      <em class = "pic">></em>
    </router-link>
      </div>
      <!--      路由导向个人描述-->
      <div class="father">
    <router-link active-class="self-ripple" tag="li" to="/center/perdecri">
      <em class = "word">个人描述</em>
      <em class = "pic">></em>
    </router-link>
      </div>
      <!--      路由导向我的动态-->
      <div class="father">
    <router-link active-class="self-ripple" tag="li" to="/center/mytid">
      <em class = "word">我的动态</em>
      <em class = "pic">></em>
    </router-link>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
  li{
    display: flex;
    list-style: none;
    position: relative;
    width: 100%;
    height: 20px;
    background-color: white;
    padding:20px 5px;
    border-radius: 10px;
    margin: 5px;
  }
  em{
    font-style: normal;
    margin: 0 5px;
  }
  .word{
    position: absolute;
    left: 5px;
  }
  .pic{
    position: absolute;
    right: 5px;
  }
</style>
