<template>
  <div id="detail"></div>
</template>

<script>

export default {
  name: 'Detail',
  data () {
    return {
      idx: ''
    }
  },
  created () {
    console.log('打印一下', this.$route)
  }
}
</script>

<style>
  #detail {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
  }
</style>
