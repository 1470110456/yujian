// 修改昵称
<template>
  <div>
    <div class="center" v-show="$store.state.isCenterbarShow">
      修改昵称
      <i @click="ChangeName()">完成</i>
      <span v-show="isShow">更改成功!</span>
    </div>
    <div class="father"><input id="modify" maxlength="36" type="text" v-model="mytext"></div>
  </div>
</template>

<script>
const AV = require('leancloud-storage')
export default {
  data () {
    return {
      mytext: AV.User.current().attributes.name,
      isShow: false,
      // 倒计时
      count: ''
    }
  },
  methods: {
    ChangeName () {
      AV.User.current().attributes.name = this.mytext
      // 以下实现 更改成功的提示
      this.isShow = true
      // 10s后跳转页面
      var timejump = 10
      this.isShow = true
      if (!this.timer) {
        this.count = timejump
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timejump) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
            // 跳转的页面写在此处
            this.$router.go(-1)
          }
        }, 100)
      }
    }
  },
  beforeMount () {
    // 在加载avatar组件时 实现center页面的隐藏
    this.$store.commit('HideCenterbar', false)
  },
  mounted () {
    document.getElementById('modify').focus()
  },
  beforeDestroy () {
    // 在退出avatar组件时 实现center页面的显现
    this.$store.commit('ShowCenterbar', true)
  }
}
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .center {
    position: relative;
    font-style: normal;
    font-weight: 700;
    color: #3a3ae3;
    display: block !important;
    background-color: white;
    height: 45px;
    line-height: 45px;
    margin: 0 0 1px 0;
    border-radius: 0 0 10px 10px;
  }

  i {
    font-style: normal;
    position: absolute;
    font-weight: 400;
    right: 15px;
    font-size: 17px;
    color: #000;
  }

  .father {
    display: flex;
    background-color: white;
    margin: 5px 0px;
  }

  #modify {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-indent: 0.2em;
    font-size: 17px;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: #666666;
    margin: 0 3px;
    outline: none;
  }

  span {
    position: fixed;
    top: 50%;
    font-size: 18px;
    color: whitesmoke;
    left: 45%;
    animation: myfirst 2.5s;
  }

  @keyframes myfirst {
    from {
      color: black;
    }
    to {
      color: whitesmoke;
    }
  }
</style>
