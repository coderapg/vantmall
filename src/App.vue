<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from 'components/content/TabBar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style lang="less">
  // @import url('./assets/fonts/iconfont.css');
  @import url('./assets/css/normalize.css');
</style>
