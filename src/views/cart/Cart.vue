<template>
  <div id="cart">
    <cart-nav-bar />
    <cart-list />
    <cart-submit-bar />
  </div>
</template>

<script>
import CartNavBar from './components/CartNavBar'
import CartList from './components/CartList'
import CartSubmitBar from './components/CartSubmitBar'

export default {
  name: 'Cart',
  components: {
    CartNavBar,
    CartList,
    CartSubmitBar
  }
}
</script>

<style lang="less" scoped>
  #cart {}
</style>
