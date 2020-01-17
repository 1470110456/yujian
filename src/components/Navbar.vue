<template>
  <div>
    <nav>
      <ul>
        <li>
          <img src="../iconfont/personalcenter.svg" id="avatar" alt="中心" />
        </li>
        <li id="title">
          <h4>{{getTitle}}</h4>
        </li>
        <li>
          <img src="../iconfont/setting.svg" alt="设置"/>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    getTitle () {
      return this.$store.state.whereHere
    }
  }
}
</script>

<style lang="scss" scoped>

  nav {
    background: white;
    position: fixed;
    width: 100%;
    top: -5px;
    border-radius: 10px;

    ul {
      list-style-type: none;
      display: flex;

      li {
        flex: 1;
        line-height: 50px;

        img {
          width: 30px;
          height: 30px;
          margin-bottom: -12px;
        }
      }
    }
  }
  #title{
    margin-top: 20px;
    line-height: 100%;
    opacity: 0.6;
    color: blue;
    flex: 2;
  }
  #avatar{
    line-height: 100%;
    margin-bottom: -13px;
    box-shadow: 0 5px 60px -20px blue;
  }
</style>
