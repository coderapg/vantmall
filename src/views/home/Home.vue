<template>
  <div id="home">
    <home-nav-bar />
  </div>
</template>

<script>
import HomeNavBar from './components/HomeNavBar'

export default {
  name: 'Home',
  components: {
    HomeNavBar
  }
}
</script>

<style lang="less" scoped>
  #home {}
</style>
