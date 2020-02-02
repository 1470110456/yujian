//语见一带一路导航栏
<template>
  <div>
    <ul class="YJfather">
      <!--路由导向一带-->
      <router-link active-class="YJripple" tag="li" to="/YuJian/TheBelt">
        <p id="TB">The Belt</p>
      </router-link>
      <!--路由导向一路-->
      <router-link active-class="YJripple" tag="li" to="/YuJian/TheRoad">
        <p id="TR">The Road</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YuJianbar'
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  .YJfather {
    margin-top: 50px;
    list-style: none;
    background-color: white;
  }

  li {
    width: 45%;
    heigth: 65px;
    display: inline-block;
  }

  p {
    font-size: 2em;
    line-height: 65px;
    color: cornflowerblue;
  }

  .YJripple {
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0 6px 60px -18px blue;
    border-radius: 10px;
    transition-duration: 0.3s;
    color: black;
  }
</style>
