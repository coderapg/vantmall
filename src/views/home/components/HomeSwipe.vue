<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff6700">
    <van-swipe-item v-for="item in bannerArr" :key="item.image">
      <van-image
        fit="contain"
        :src="item.image"
        @load="handleBannerLoad" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  name: 'HomeSwipe',
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
  },
  methods: {
    handleBannerLoad () {
      if (!this.isLoad) {
        this.$emit('handleBannerLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>
  .my-swipe .van-swipe-item {
    background-color: #fff;
  }
</style>
