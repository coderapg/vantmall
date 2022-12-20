<template>
  <van-nav-bar class="detail-nav-bar">
    <template #left>
      <van-icon name="arrow-left" @click="handleBack" />
    </template>
    <template #title>
      <div class="detail-tabs">
        <div class="detail-tab-item" v-for="(item, index) in detailTabs" :key="index" :class="{ actived: tabActive === index }" @click="handleDetailTabItemClick(index)">{{ item }}</div>
      </div>
    </template>
    <template #right>
      <van-icon class-prefix="icon" name="gengduo" />
    </template>
  </van-nav-bar>
</template>

<script>
import { handleBackMixin } from 'common/mixin'

export default {
  name: 'DetailNavBar',
  mixins: [handleBackMixin],
  data () {
    return {
      tabActive: 0,
      detailTabs: ['商品', '参数', '评论', '推荐']
    }
  },
  methods: {
    handleDetailTabItemClick (index) {
      this.tabActive = index
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-nav-bar {
    /deep/ .van-nav-bar__content {
      .van-nav-bar__left {
        .van-icon {
          font-size: 24px;
          color: #333;
        }
      }
      .van-nav-bar__title {
        flex: 1;
        .detail-tabs {
          display: flex;
          .detail-tab-item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            color: #999;
            font-size: 14px;
          }
          .actived {
            color: #ff6700;
          }
        }
      }
      .van-nav-bar__right {
        opacity: 0;
      }
    }
  }
</style>
