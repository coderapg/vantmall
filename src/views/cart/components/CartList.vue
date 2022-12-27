<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad">
    <van-swipe-cell>
      <div class="card-content">
        <van-checkbox v-model="checked" />
        <div>123</div>
        <!-- <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://img01.yzcdn.cn/vant/cat.jpeg">
        </van-card> -->
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </van-list>
</template>

<script>

export default {
  name: 'CartList',
  data () {
    return {
      loading: false,
      finished: false,
      checked: true
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 加载状态结束
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
  .van-list {
    margin: 10px;
    .van-swipe-cell {
      border-radius: 15px;
      background-color: #fff;
      /deep/ .van-swipe-cell__wrapper {
        .card-content {
          display: flex;
        }
      }
    }
  }
  .goods-card {
    margin: 0;
  }
  .delete-button {
    height: 100%;
  }
</style>
