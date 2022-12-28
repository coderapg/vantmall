<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" ref="refresh">
    <van-list
      v-model="loading"
      offset="100"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <slot></slot>
    </van-list>
  </van-pull-refresh>
</template>

<script>
export default {
  name: 'PullRefresh',
  data () {
    return {
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false
        }
        this.loading = false
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>
