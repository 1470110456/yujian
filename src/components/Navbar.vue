// Author: YiberZ
// Time: 2020-01-21 12:31
// 顶部导航栏组件
<template>
  <div>
    <nav>
<!--      导向center路由-->
      <ul>
        <router-link tag="li" to="/center">
          <img :src='avatar' alt="中心" class='avatar'/>
        </router-link>
        <li class='title'>
          <h3>{{whereHere}}</h3>
        </li>
        <li>
          <img class='setting' :src='rightImg' alt='设置'/>
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
    ...mapState(['avatar', 'rightImg', 'whereHere'])
  },
  methods: {},
  beforeUpdate () {
    console.log('update !')
  }
}
</script>

<style lang="scss" scoped>
  nav {
    background: white;
    position: fixed;
    width: 100%;
    top: 0;
    border-radius: 0 0 0.75rem 0.75rem;

    ul {
      list-style-type: none;
      display: flex;

      li {
        flex: 1;
        margin: 0.5rem 0 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .avatar {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 90%;
        }
        .setting{
          width: 1.75rem;
          height: 1.75rem;
        }
      }
      .title{
        opacity: 0.6;
        color: blue;
        flex: 2;
      }
    }
  }

</style>
