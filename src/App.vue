<template>
  <div>
    <navbar/>
    <div id="router">
      <router-view />
    </div>
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
    height: 100%;
    background: whitesmoke;
    text-align: center;
  }

  #router{
    margin-top: 50%;
  }
</style>
