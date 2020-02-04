// Author: YiberZ
// Time: 2020-01-21 12:31
// 底部导航栏组件
<template>
  <div>
    <nav>
      <ul>
        <router-link active-class="ripple" tag="li" to="/yujian">
          <img src="../assets/iconfont/glob.svg" alt="语见" />
        </router-link>
        <router-link active-class="ripple" tag="li" to="/msglist">
          <img src="../assets/iconfont/msg.svg" alt="消息"/>
        </router-link>
        <router-link active-class="ripple" tag="li" to="/things">
          <img src="../assets/iconfont/things.svg" alt="动态"/>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  nav {
    background: white;
    position: fixed;
    width: 100%;
    bottom: 0;
    border-radius: 0.75rem 0.75rem 0 0;

    ul {
      list-style-type: none;
      display: flex;

      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin: 0.75rem 0 0.75rem 0;
          width: 1.75rem;
          height: 1.75rem;
        }
      }
    }
  }

  // 选中时的效果
  .ripple {
    box-shadow: 0 2rem 3rem -1rem blue;
    border-radius: 0.75rem 0.75rem 0 0;
    transition-duration: 0.3s;
  }
</style>
