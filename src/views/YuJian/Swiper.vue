<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!--分页器-->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  mounted: function () {
    console.log('swiper-mounted')
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      // 播放效果
      effect: 'coverflow',
      coverflowEffect: {
        slideShadows: false
      },
      // 循环播放
      loop: true,
      // 自动播放
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 分页器选项
      // pagination: {
      // el: '.swiper-pagination'
      // }
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true// 修改swiper的父元素时，自动初始化swiper
    })
  },
  name: 'Swiper'
}
</script>

<style lang="scss" scoped>
  .swiper-wrapper {
    margin-top: 20px;
  }
</style>
