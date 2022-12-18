<template>
  <div class="home-recommend">
    <van-grid square center :border="false">
      <van-grid-item v-for="item in recommendArr" :key="item.title" :icon="item.image" :text="item.title" />
    </van-grid>
  </div>
</template>

<script>

export default {
  name: 'HomeRecommend',
  props: {
    recommendArr: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .home-recommend {
    margin: 10px 0px;
    /deep/ .van-grid-item {
      .van-icon {
        font-size: 70px;
      }
      .van-grid-item__text {
        font-size: 14px;
        color: #333;
      }
    }
  }
</style>
