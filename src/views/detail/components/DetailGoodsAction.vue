<template>
  <van-goods-action>
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
    <van-goods-action-button type="warning" text="加入购物车" @click="handleAddCart" />
    <van-goods-action-button type="danger" text="立即购买" @click="handleBuyNow" />
  </van-goods-action>
</template>

<script>

export default {
  name: 'DetailGoodsAction',
  methods: {
    handleAddCart () {
      console.log('添加购物车')
    },
    handleBuyNow () {
      console.log('立即购买')
    }
  }
}
</script>

<style>
</style>
