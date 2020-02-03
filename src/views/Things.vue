// Author:
// Time: 2020-01-21 12:31
// 动态视图
<template>
  <div class="things1" :style='Styleofmy'>
    <ul class="things">
      <li class="jiazaizhong">加载中..</li>
      <li class="things2" v-for="thing0 in things" :key="thing0.name" @click="onclinkhandleThings">
        <div class="have">
          <div class="thingstate">
            <img class="avatar" :src="thing0.contact.avatar" alt="avatar">
            <h5 class="name">{{thing0.contact.name}}{{thing0.puttime}}</h5>
            <button class="inside">详情</button>
          </div>
          <div class="neirong">
            <p class="title2">{{thing0.thingtitle}}</p>
            <img class="picture" :src="thing0.contact.picture" alt="picture">
          </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store/index'
import things from '../../static/things'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      things: things,
      Styleofmy: {
        height: '0px'
      }
    }
  },
  methods: {
    onclinkhandleThings () {
      this.$router.push('/thingsroom')
    }
  },
  mounted () {
    // 将当前视图的名称发送到ansWhere的mutation中，以动态修改顶部导航栏显示名称
    store.commit('ansWhere', '动态')
    this.Styleofmy.height = document.documentElement.clientHeight + 'px'
    this.$nextTick(() => {
      this.scroll = new BScroll('.things1', {
        fade: true,
        interactive: false
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .things1{
    overflow: hidden;
    .things{
      list-style-type: none;
      .jiazaizhong{
        margin-bottom: 32px;
        opacity: 0.7;
      }
      .things2{
        display: flex;
        border-radius: 12px;
        box-shadow: 0 6px 30px -30px;
        margin: 20px;
        .have{
          width: 100%;
          margin: 0px 0 0 0;
          .thingstate {
            display: flex;
            margin: 0 0 0 0;
            .avatar{
              background-color: black;
              width: 60px;
              height: 60px;
              border-radius: 90%;
              margin: 0px 0px 0px 0px;
            }
            .name{
              margin: 15px 0px 0px 0px;
              opacity: 1;
              width: 50px;
            }
            .inside{
              height: 25px;
              width: 50px;
              margin: 15px 0px 0px 220px;
            }
          }
          .neirong{
            margin: 0 200px 0 0;
            .picture{
              height: auto;
              width: auto;
              margin: 10px 1px 5px 1px;
            }
            .title2{
              width: 200px;
              margin: 0px 0px 0px 0px;
            }
          }
          }
      }
    }
  }
</style>
