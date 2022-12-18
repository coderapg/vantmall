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
  props: {
    // 是否允许better-scroll触发原生click事件
    isClick: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  mounted () {
    this.BScroll = new BetterScroll(this.$refs.wrapper, {
      click: this.isClick
    })
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    overflow: hidden;
  }
</style>
