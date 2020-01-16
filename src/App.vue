<template>
  <div>
    <router-view>Done</router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'

export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    tabbar: tabbar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    background: whitesmoke;
  }
</style>
