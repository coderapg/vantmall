<template>
  <div class="shop">
    <shop-nav-bar />
    <shop-info />
  </div>
</template>

<script>
import ShopNavBar from './components/ShopNavBar'
import ShopInfo from './components/ShopInfo'

export default {
  name: 'Stop',
  components: {
    ShopNavBar,
    ShopInfo
  }
}
</script>

<style lang="less" scoped>
  .shop {
    position: relative;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: #ededf5;
  }
</style>
