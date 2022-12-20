<template>
  <van-nav-bar class="detail-nav-bar">
    <template #left>
      <van-icon name="arrow-left" @click="handleBack" />
    </template>
    <template #title>
      <div class="detail-tabs">
        店铺详情
      </div>
    </template>
    <template #right>
      <van-badge :content="3" max="99">
        <van-icon name="ellipsis" />
      </van-badge>
    </template>
  </van-nav-bar>
</template>

<script>
import { handleBackMixin } from 'common/mixin'

export default {
  name: 'ShopNavBar',
  mixins: [handleBackMixin],
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .detail-nav-bar {
    /deep/ .van-nav-bar__content {
      .van-nav-bar__left {
        .van-icon {
          font-size: 24px;
          color: #4a4a4a;
        }
      }
      .van-nav-bar__title {
        flex: 1;
        .detail-tabs {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #404040;
        }
      }
      .van-nav-bar__right {
        .van-icon  {
          font-size: 24px;
          color: #4a4a4a;
          font-weight: bold;
        }
      }
    }
  }
</style>
