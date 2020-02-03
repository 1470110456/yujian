// 设置性别
<template>
  <div>
    <div class="father">
      <i class="set">设置性别</i>
      <i @click="ChangeName()">完成</i>
    </div>
    <div class="boy">
      <input checked name="radios" type="radio" v-model="param" value="男"><label>男</label>
    </div>
    <div class="girl">
      <input name="radios" type="radio" v-model="param" value="女"><label>女</label>
    </div>

    <span v-show="isShow">设置成功!</span>
  </div>
</template>

<script>
  const AV = require('leancloud-storage')
  export default {
    data() {
      return {
        isShow: false,
        // 倒计时
        count: '',
        // 设置默认值为1，即设置第一个单选框为选中状态
        param: AV.User.current().attributes.sex
      }
    },
    methods: {
      ChangeName() {
        AV.User.current().attributes.sex = this.param
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
    beforeMount() {
      // 在加载avatar组件时 实现center页面的隐藏
      this.$store.commit('HideCenterbar', false)
    },
    beforeDestroy() {
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

  i {
    font-style: normal;
  }

  .father {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;

    i {
      position: absolute;
      font-weight: 400;
      right: 15px;
      font-size: 17px;
      color: #000;
    }

    .set {
      width: 100px;
      height: auto;
      position: absolute;
      font-weight: 700;
      left: 38%;
      color: #3a3ae3;
    }
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

  .boy {
    position: relative;
    left: 0;
    margin: 5px 0 0 0;
    height: 40px;
    line-height: 40px;
    background: #fff;
    border-bottom: 1px solid #f1ebeb;
  }

  input {
    position: absolute;
    top: 16px;
    right: 10px;
    text-align: center;
  }

  label {
    position: absolute;
    left: 10px;
    top: 1px;
  }

  .girl {
    position: relative;
    left: 0;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

</style>
