<template>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
    <template #tip>你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span></template>
  </van-submit-bar>
</template>

<script>

export default {
  name: 'CartSubmitBar',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onClickEditAddress () {
      console.log('onClickEditAddress===')
    },
    onSubmit () {
      console.log('提交')
    }
  }
}
</script>

<style lang="less" scoped>
  .van-submit-bar {
    bottom: 50px;
  }
</style>
