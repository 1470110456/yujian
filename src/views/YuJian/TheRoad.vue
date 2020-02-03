<template>
  <div>
    <swiper :key="TRlist.length">
      <!--国家信息卡轮播-->
      <div :key="tr.name" class="swiper-slide" v-for="tr in TRlist">
        <!--国家信息卡片-->
        <div :style=" {backgroundImage:'url('+tr.photo+')'}" class="TRCard">
          <!--设置背景图片遮盖-->
          <div class="Cover">
            <!--国家名称-->
            <p id="trname">{{tr.name}}</p>
            <!--经度-->
            <p class="trad">Latitude {{tr.Latitude}}</p>
            <!--纬度-->
            <p class="trad">longitude {{tr.longitude}}</p>
          </div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>
import swiper from '@/views/YuJian/Swiper'
import TRs from '../../../static/TRs'

export default {
  // 返回国家数据
  data () {
    return {
      TRlist: TRs
    }
  },
  name: 'TheRoad',
  components: {
    swiper: swiper
  }
}
</script>

<style lang="scss" scoped>
  .TRCard {
    display: inline-block;
    margin: 20px auto 0px auto;
    width: 70%; //卡片宽度比例自适应屏幕
    border-radius: 12px; // 卡片为圆角
    background-size: cover; // 卡片背景为自适应屏幕
    .Cover {
      display: inline-block;
      width: 100%;
      border-radius: 12px;
      background: linear-gradient(to top, rgba(255, 0, 255, 0.2), rgba(255, 255, 255, 0.4)); // 设置渐变遮盖
    }

    #trname {
      margin-top: 20px;
      font-size: 30px;
      color: white;
    }

    .trad {
      display: inline-block;
      width: 43%;
      height: 40px;
      color: white;
      font-size: 15px;
      margin-top: 110%;
    }
  }
</style>
