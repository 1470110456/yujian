<template>
  <div>
    <router-view/>
    <navbar/>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
import navbar from './components/Navbar'

export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    tabbar: tabbar,
    navbar: navbar
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: noto sans, sans-serif;
    height: 100%;
    background: whitesmoke;
    text-align: center;
  }
</style>
