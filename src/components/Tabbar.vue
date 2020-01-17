<template>
  <div>
    <nav>
      <ul>
        <router-link active-class="ripple" tag="li" to="/yujian">
          <img src="../iconfont/glob.svg" alt="语见" />
        </router-link>
        <router-link active-class="ripple" tag="li" to="/msglist">
          <img src="../iconfont/msg.svg" alt="消息"/>
        </router-link>
        <router-link active-class="ripple" tag="li" to="/usercenter">
          <img src="../iconfont/things.svg" alt="我的"/>
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
    bottom: -10px;
    border-radius: 10px;

    ul {
      list-style-type: none;
      display: flex;

      li {
        flex: 1;
        padding-top: 5px;
        line-height: 50px;
        text-align: center;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .ripple {
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0 5px 60px -20px blue;
    border-radius: 10px;
    transition-duration: 0.3s;
    color: black;
  }
</style>
