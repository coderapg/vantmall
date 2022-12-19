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
    probeType: {
      type: Number,
      default: 0,
      required: true
    },
    // 是否允许better-scroll触发原生click事件
    isClick: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  mounted () {
    this.BScroll = new BetterScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: this.isClick
    })
    this.BScroll.on('scroll', position => {
      this.$emit('betterScrollScroll', position.y)
    })
  },
  methods: {
    refresh () {
      this.BScroll && this.BScroll.refresh()
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    overflow: hidden;
  }
</style>
