// Author: YiberZ
// Time: 2020-01-21 12:31
// 信息列表视图
<template>
  <div class='listFrame' :style='frameStyle'>
    <ul class='msgList'>
      <li class='fresh'>加载中......</li>
      <li class='msgs' v-for='msg in msgList' :key='msg.name' @click='handleMsgsClick()'>
        <img class='avatar' :src='msg.contact.avatar' alt='avatar'>
        <div class='msg'>
          <div class='msgTitle'>
            <h3 class='name'>{{msg.contact.name}}</h3>
            <time class='msgTime'>{{msg.msgTime}}</time>
          </div>
          <div class='msgState'>
            <p class='leastMsg'>{{msg.lastMsg}}</p>
            <div>
              <h5 class='newNum'>{{msg.newMsgNum}}</h5>
            </div>
          </div>
        </div>
      </li>
      <li class='msgNum'>{{msgList.length}}个对话</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import msgs from '../../static/msgs'

export default {
  data () {
    return {
      msgList: msgs,
      frameStyle: {
        height: '0px'
      }
    }
  },
  methods: {
    handleMsgsClick () {
      this.$router.push('/ChatRoom')
    }
  },
  mounted () {
    // 将当前视图的名称发送到ansWhere的mutation中，以动态修改顶部导航栏显示名称
    this.$store.commit('ansWhere', '消息')
    // 动态修改消息列表窗口高度
    this.frameStyle.height = document.documentElement.clientHeight + 'px'
    // 初始化better-scroll
    this.$nextTick(() => {
      this.scroll = new BScroll('.listFrame', {
        fade: true,
        interactive: false
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .listFrame{
    overflow: hidden;
    .msgList{
      list-style-type: none;
      .fresh{
        margin-bottom: 32px;
        opacity: 0.7;
      }
      .msgNum{
        margin-top: 32px;
        opacity: 0.7;
      }
      .msgs{
        display: flex;
        align-items: center;
        background: white;
        border-radius: 12px;
        box-shadow: 0 6px 30px -30px;
        margin: 12px;
        .avatar{
          width: 60px;
          height: 60px;
          border-radius: 90%;
          margin: 6px 18px 6px 18px;
        }
        .msg{
          width: 100%;
          margin: 0 18px 0 0;
          .msgTitle{
            width: 100%;
            display: flex;
            text-align: left;
            .name{
              flex: 8;
              opacity: 0.7;
            }
            .msgTime{
              opacity: 0.6;
              text-align: right;
            }
          }
          .msgState{
            display: flex;
            .leastMsg{
              flex: 8;
              opacity: 0.6;
              width: 0;
              text-align: left;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .newNum{
              text-align: center;
              color: white;
              background-color: rgba(0, 191, 255, 0.6);
              width: 18px;
              height: 18px;
              border-radius: 90%;
            }
          }
        }
      }
    }
  }
</style>
