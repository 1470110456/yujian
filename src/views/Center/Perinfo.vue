// 昵称
<template>
  <div>
    <!--修改昵称-->
    <div v-if="$store.state.isNameCreate">
      <div class="center">
        修改昵称
        <i @click="ChangeName()" class="f1">完成</i>
        <span v-show="isNameshow">更改成功!</span>
      </div>
      <div class="father"><input class="modify" maxlength="15" ref='id' type="text" v-model="mytext"></div>
    </div>
    <!--    // 设置性别-->
    <div v-if="$store.state.isSexCreate">
      <div class="setfather">
        <i class="set">设置性别</i>
        <i @click="ChangeSex()" class="f2">完成</i>
      </div>
      <div class="boy">
        <input class="people" ref='id' type="radio" v-model="param" value="男"><label>男</label>
      </div>
      <div class="girl">
        <input class="people" type="radio" v-model="param" value="女"><label>女</label>
      </div>
      <span clas="s2" v-show="isSetshow">设置成功!</span>
    </div>
    <!--    个人描述-->
    <div v-if="$store.state.isDeriCreate">
      <div class="center">
        个人描述
        <i @click="ChangeDeri()" class="f1">保存</i>
        <span v-show="isDeriShow">保存成功!</span>
      </div>
      <div class="deFather">
      <textarea @input="descInput" cols="3" id="modify" maxlength="56" ref="id" rows="3" v-model="myDeri">
      </textarea>
        <i class="blank" v-show="show1()">介绍一下自己吧</i>
        <i class="count">{{remnant}}/56</i>
      </div>
    </div>
  </div>
</template>

<script>
const AV = require('leancloud-storage')
export default {
  data () {
    return {
      // 个人描述最大的字数
      remnant: 56 - AV.User.current().attributes.perdecrib.length,
      // 动态修改姓名
      mytext: AV.User.current().attributes.name,
      // 即设置第一个单选框为选中状态
      param: AV.User.current().attributes.sex,
      // 动态修改个人描述
      myDeri: AV.User.current().attributes.perdecrib,
      // 更改成功提示
      isNameshow: false,
      isSetshow: false,
      isDeriShow: false,
      // 倒计时
      count: ''
    }
  },
  methods: {
    descInput () {
      var txtVal = this.myDeri.length
      this.remnant = 56 - txtVal
    },
    // 当个人描述为空时，显现
    show1 () {
      if (this.myDeri.length === 0) {
        return true
      } else {
        return false
      }
    },
    // 修改昵称
    ChangeName () {
      AV.User.current().attributes.name = this.mytext
      // 修改后端name数据
      AV.User.current().set('name', this.mytext)
      AV.User.current().save()
      // 以下实现 更改成功的提示
      this.isNameshow = true
      // 10s后跳转页面
      var timejump = 10
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
    },
    // 设置性别
    ChangeSex () {
      AV.User.current().attributes.sex = this.param
      // 修改后端sex数据
      AV.User.current().set('sex', this.param)
      AV.User.current().save()
      // 以下实现 更改成功的提示
      this.isSetshow = true
      // 10s后跳转页面
      var timejump = 10
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
    },
    // 修改个人介绍
    ChangeDeri () {
      var is = this.myDeri
      if (is.length === 0) {
        AV.User.current().set('perdecrib', '介绍一下自己吧')
        AV.User.current().save()
      } else {
        AV.User.current().attributes.perdecrib = this.myDeri
        AV.User.current().set('perdecrib', this.myDeri)
        AV.User.current().save()
      }
      // 以下实现 更改成功的提示
      this.isDeriShow = true
      // 修改后端name数据
      // 10s后跳转页面
      var timejump = 10
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
  mounted () {
    this.$refs.id.focus()
  },
  computed: {},
  beforeMount () {
    // 在加载avatar组件时 实现center页面的隐藏
    this.$store.commit('HideCenterbar', false)
  },
  beforeDestroy () {
    // 在退出perinfo组件时 实现center页面的显现
    this.$store.commit('ShowCenterbar', true)
  }
}
</script>
<style lang="scss" scoped>
  /*公共样式*/
  * {
    margin: 0;
    padding: 0;
  }

  i {
    font-style: normal;
  }

  .count {
    position: fixed;
    right: 0;
    top: 126px;
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

  /*昵称的样式*/
  .center {
    position: relative;
    font-weight: 700;
    color: #3a3ae3;
    display: block !important;
    background-color: white;
    height: 45px;
    line-height: 45px;
    margin: 0 0 1px 0;
    border-radius: 0 0 10px 10px;
  }

  .f1 {
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

  .modify {
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

  /*性别的样式*/
  .setfather {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;

    .f2 {
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

  .boy {
    position: relative;
    left: 0;
    margin: 5px 0 0 0;
    height: 40px;
    line-height: 40px;
    background: #fff;
    border-bottom: 1px solid #f1ebeb;
  }

  .people {
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

  /*  个人描述*/
  .deFather {
    display: flex;
    position: relative;
    background-color: white;
    border-bottom: 1px;
    border-bottom-style: solid;
  }

  #modify {
    width: 100%;
    height: 100px;
    font-size: 17px;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 0px;
    border-bottom-style: solid;
    outline: none;
  }

  .blank {
    position: fixed;
    top: 45px;
    left: 5px;
    color: #666666;
  }
</style>
