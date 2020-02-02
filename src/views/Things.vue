// Author:
// Time: 2020-01-21 12:31
// 动态视图
<template>
  <div class="things1" :style='Styleofmy'>
    <ul class="things">
      <li class="jiazaizhong">加载中..</li>
      <li class="things2" v-for="thing0 in things" :key="thing0.name" @click="onclinkhandleThings">
        <img class="avatar" :src="thing0.contact.avatar" alt="avatar">
        <h5 class="name">{{thing0.contact.name}}</h5>
        <div class="have">
          <div class="title1">
          </div>
          <div class="thingstate">
            <p class="title2">{{thing0.thingtitle}}</p>
          </div>
          <div>
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
        background-color: antiquewhite;
        }
      .avatar{
        background-color: black;
        width: 60px;
        height: 60px;
        border-radius: 90%;
        margin: 5px 5px 5px 5px;
        .have{
          width: 100%;
          margin: 0 18px 0 0;
          .title1{
            width: 100%;
            display: flex;
            text-align: left;
            }
          }
      }
      .name{
        margin: 5px 2px 3px 4px;
        opacity: 1;
      }
      .thingstate{
        display: flex;
        .title2{
          margin: 60px 0px 5px 0px;
        }
      }
      .picture{
        height: auto;
        width: auto;
        margin: 0px 1px 1px 1px;
      }
    }
  }
</style>
