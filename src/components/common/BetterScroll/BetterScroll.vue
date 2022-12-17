<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'BetterScroll',
  data () {
    return {
      BScroll: null
    }
  },
  mounted () {
    this.BScroll = new BetterScroll(this.$refs.wrapper)
    console.log('mounted===', this.BScroll)
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    overflow: hidden;
  }
</style>
