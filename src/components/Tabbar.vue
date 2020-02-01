// Author: YiberZ
// Time: 2020-01-21 12:31
// 底部导航栏组件
<template>
  <div>
    <nav>
      <ul>
        <router-link active-class="ripple" tag="li" to="/yujian" replace>
          <img src="../iconfont/glob.svg" alt="语见" />
        </router-link>
        <router-link active-class="ripple" tag="li" to="/msglist" replace>
          <img src="../iconfont/msg.svg" alt="消息"/>
        </router-link>
        <router-link active-class="ripple" tag="li" to="/things" replace>
          <img src="../iconfont/things.svg" alt="动态"/>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {}
}
</script>

<style lang="scss" scoped>

  nav {
    background: white;
    position: fixed;
    width: 100%;
    bottom: -10px;
    border-radius: 10px;

    ul {
      list-style-type: none;
      display: flex;

      li {
        flex: 1;
        padding-top: 5px;
        line-height: 50px;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  // 选中时的效果
  .ripple {
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0 36px 54px -15px blue;
    border-radius: 10px;
    transition-duration: 0.3s;
    color: black;
  }
</style>
