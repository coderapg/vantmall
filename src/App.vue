<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-icon class-prefix="icon" name="shoucang1" />
    <van-icon class-prefix="icon" name="receipt-address" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
  @import url('./assets/fonts/iconfont.css');
</style>
