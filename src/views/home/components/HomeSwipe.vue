<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in bannerArr" :key="item.image">
      <van-image
        fit="contain"
        :src="item.image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  name: 'HomeSwipe',
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
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #fff;
  }
</style>
