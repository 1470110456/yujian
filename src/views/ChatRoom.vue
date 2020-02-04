<template>
    <div>
      <ul class='rooom'>
        <li class='message' v-for='message in arr' :key="message.id">
          {{message.a}}
        </li>
      </ul>
      <button @click='test()'>
        <b>CLICK ME</b>
      </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['arr'])
  },
  methods: {},
  beforeRouteLeave (to, from, next) {
    store.commit('setNavRight', require('../assets/iconfont/setting.svg'))
    next()
  }
}
</script>

<style scoped>
  button{
    color: white;
    padding: 12px 18px 12px 18px;
    background-color: rgba(30 30 255 );
    border-radius: 90px;
    border-style: hidden;
    box-shadow: 2px 2px 6px 1px grey;
  }

</style>
