<template>
  <div class="shop">
    <shop-nav-bar />
    <shop-info :shop-info="shopInfo" />
  </div>
</template>

<script>
import ShopNavBar from './components/ShopNavBar'
import ShopInfo from './components/ShopInfo'

import { mapState } from 'vuex'

export default {
  name: 'Stop',
  components: {
    ShopNavBar,
    ShopInfo
  },
  computed: {
    ...mapState({
      shopInfo: state => state.shopInfo
    })
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
