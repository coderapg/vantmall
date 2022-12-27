<template>
  <van-nav-bar>
    <template #left>
      <p>购物车<span>(10)</span></p>
    </template>
    <template #title>
      <p>配送至:<span>山东省济宁市高新区绿色家园小区G11号楼1单元301</span></p>
    </template>
    <template #right>
      <p>管理</p>
    </template>
  </van-nav-bar>
</template>

<script>

export default {
  name: 'CartNavBar'
}
</script>

<style lang="less" scoped>
  .van-nav-bar {
    /deep/ .van-nav-bar__content {
      height: 44px;
      .van-nav-bar__left {
        padding: 0 8px;
        p {
          font-size: 16px;
          color: #000;
          font-weight: bold;
          span {
            font-weight: normal;
            color: #333;
            font-size: 12px;
          }
        }
      }
      .van-nav-bar__title {
        p {
          width: 100%;
          padding-left: 10px;
          font-size: 12px;
          color: #999;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .iconfont {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .van-nav-bar__right {}
    }
  }
</style>
