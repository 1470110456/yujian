// 头像库
<template>
  <div>
    <i class="avatar">
      <button @click="ChangeAvatar()">设为头像</button>
      <img :src="this.$store.state.url">
      <span v-show="isShow">更改成功!</span>
    </i>
  </div>
</template>
<script>

const AV = require('leancloud-storage')
export default {
  data () {
    return {
      isShow: false
    }
  },
  beforeMount () {
    // 在加载Avatarshop组件时 实现Avatar页面的隐藏
    this.$store.commit('HideAvatar', false)
  },
  beforeDestroy () {
    // 在加载Avatarshop组件时 实现Avatar页面的隐藏
    this.$store.commit('ShowAvatar', true)
  },
  methods: {
    // 修改头像
    ChangeAvatar () {
      // 显示更改成功
      this.isShow = true
      // console.log(AV.User.current().attributes)
      // fileStore 存放新建的头像文件
      var fileStore = AV.File.withURL(
        'newAvatar',
        this.$store.state.url
      )
      // fileDestory存放释放的头像文件
      var fileDestory = AV.User.current().attributes.avatar
      // 覆盖原来的头像
      AV.User.current().set('avatar', fileStore)
      AV.User.current().save()
      // 释放原来的头像文件
      fileDestory.destroy()
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
            this.$router.push({ path: '/center/avatar' })
          }
        }, 100)
      }
      console.log('头像设置成功')
    }
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

  button {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    color: #fff;
    border: 2px solid #fff;
    background-color: black;
    transition: background 1s;
  }

  .avatar {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    background-color: #000000;

    img {
      position: absolute;
      top: 23%;
      left: 0;
      width: 100%;
      height: 360px;
    }

    button:hover {
      background-color: #bbbbbb;
    }

    span {
      position: absolute;
      top: 35%;
      font-size: 16px;
      left: 40%;
      animation: myfirst 2.5s;
    }

    @keyframes myfirst {
      from {
        background: white;
      }
      to {
        background: black;
      }
    }
  }
</style>
