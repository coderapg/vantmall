<template>
  <van-goods-action>
    <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
    <van-goods-action-button type="warning" text="加入购物车" />
    <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
  </van-goods-action>
</template>

<script>

export default {
  name: 'DetailGoodsAction',
  methods: {
    onClickIcon () {
      console.log('点击图标')
    },
    onClickButton () {
      console.log('点击按钮')
    }
  }
}
</script>

<style>
</style>
