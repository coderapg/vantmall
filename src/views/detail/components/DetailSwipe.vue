<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff6700">
    <van-swipe-item v-for="item in bannerArr" :key="item">
      <van-image
        fit="contain"
        :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  name: 'DetailSwipe',
  data () {
    return {
      isLoad: false
    }
  },
  props: {
    bannerArr: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  }
}
</script>

<style>
  .my-swipe {
    height: 250px;
  }
</style>
