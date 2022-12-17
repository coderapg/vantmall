<template>
  <van-nav-bar class="home-nav-bar">
    <template #left>
      <van-icon name="location-o" />
      <span>济宁</span>
    </template>
    <template #title>
      <van-search
        :clearable="false"
        disabled
        placeholder="请输入搜索关键词"
        @click="handleNavBarClick" />
    </template>
    <template #right>
      <van-icon class-prefix="icon" name="gengduo" />
    </template>
  </van-nav-bar>
</template>

<script>

export default {
  name: 'HomeNavBar',
  methods: {
    handleNavBarClick () {
      console.log('click===')
    }
  }
}
</script>

<style lang="less" scoped>
  .home-nav-bar {
    background-color: #fff;
    /deep/ .van-nav-bar__content {
      height: 44px;
      .van-nav-bar__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .van-icon {
          color: #666;
          font-size: 14px;
          vertical-align: middle;
        }
        span {
          font-size: 12px;
        }
      }
      .van-nav-bar__title {
        width: 70%;
        .van-search {
          padding: 5px 12px;
          .van-search__content {
            background-color: #f1f1f1;
            border-radius: 44px;
            .van-icon {
              color: #999;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>
