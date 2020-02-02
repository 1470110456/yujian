<template>
  <div>
    <swiper>
      <div :key="tb.name" class="swiper-slide" v-for="tb in TBlist">
        <!--国家信息卡片-->
        <div :style=" {backgroundImage:'url('+tb.photo+')'}" class="TBCard">
          <!--国家照片-->
          <!--<img class='TBP' :src='tb.photo' width="100%" height="400px" alt='COUNTRY'>-->
          <!--国家名称-->
          <div class="TBname">{{tb.name}}</div>
          <!--经纬度-->
          <div class="TBad"><p>Latitude {{tb.Latitude}}</p>
            <p>longitude {{tb.longitude}}</p></div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>
import swiper from '@/views/YuJian/Swiper'
import TBs from '../../../static/TBs'

export default {
  // 返回国家数据
  data () {
    return {
      TBlist: TBs
    }
  },
  name: 'TheBelt',
  components: {
    swiper: swiper
  }
}
</script>

<style lang="scss" scoped>
  .TBCard {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 400px;
    background-color: cornflowerblue;
    border-radius: 12px;

    .TBname {
      margin-top: 20px;
      width: 100%;
      height: 50px;
      font-size: 200%;
      color: white;
    }

    p {
      display: inline-block;
      width: 43%;
      height: 40px;
      font-size: 100%;
      font-weight: bold;
      margin-top: 110%;
      color: white;
    }
  }
</style>
