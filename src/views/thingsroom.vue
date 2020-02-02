<template>
  <div >
    <div class="insidething" v-for="inside in things" :key="inside.name">
      <img class="avatar" :src="inside.contact.avatar" alt="avatar">
      <h4 class="name">{{inside.contact.name}}</h4>
      <p class="title">{{inside.thingtitle}}</p>
      <p class="inside"></p>
      </div>
  </div>
</template>

<script>
import things from '../../static/things'
export default {
  data () {
    return {
      things: things
    }
  }
}
</script>

<style scoped>
  .avatar{
    height: 300px;
    width: 300px;
  }
</style>
