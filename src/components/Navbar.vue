// Author: YiberZ
// Time: 2020-01-21 12:31
// 顶部导航栏组件
<template>
  <div>
    <nav>
      <ul>
        <li class='avatar'>
          <img class='avatar' :src='avatar' alt="中心" ref='avatar'>
        </li>
        <li class='title'>
          <h4>{{whereHere}}</h4>
        </li>
        <li>
          <img class='setting' src="../iconfont/setting.svg" alt="设置"/>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['avatar', 'whereHere'])
  },
  methods: {}
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

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 90%;
          margin-bottom: -13px;
        }
        .setting{
          width: 30px;
          height: 30px;
          margin-bottom: -13px;
        }
      }
    }
  }
  .title{
    margin-top: 20px;
    line-height: 100%;
    opacity: 0.6;
    color: blue;
    flex: 2;
  }
</style>
