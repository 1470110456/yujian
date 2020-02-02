<template>
  <div>
    <swiper>
      <div :key="tr.name" class="swiper-slide" v-for="tr in TRlist">
        <!--国家信息卡片-->
        <div :style=" {backgroundImage:'url('+tr.photo+')'}" class="TRCard">
          <!--国家照片-->
          <!--<img class='TBP' :src='tr.photo' width="100%" height="400px" alt='COUNTRY'>-->
          <!--国家名称-->
          <div class="TRname">{{tr.name}}</div>
          <!--经纬度-->
          <div class="TRad"><p>Latitude {{tr.Latitude}}</p>
            <p>longitude {{tr.longitude}}</p></div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>
import swiper from '@/views/YuJian/Swiper'
import TRs from '../../../static/TRs'

export default {
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

<style scoped>
  .TRCard {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 400px;
    background-color: cornflowerblue;
    border-radius: 12px;
  }

  .TRname {
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
</style>
