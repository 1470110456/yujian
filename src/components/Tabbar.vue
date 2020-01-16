<template>
  <div>
    <nav>
      <ul>
        <router-link active-class="ripple" tag="li" to="/yujian">语见</router-link>
        <router-link active-class="ripple" tag="li" to="/msglist">消息</router-link>
        <router-link active-class="ripple" tag="li" to="/usercenter">我的</router-link>
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
        line-height: 50px;
        text-align: center;
        padding-bottom: 7px;
      }
    }
  }

  .ripple {
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0 0 5px 0 gray;
    background-color: rgba(125, 125, 125, 0.2);
    border-radius: 10px;
    transition-duration: 0.3s;
    color: black;
  }
</style>
