<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
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
      }, 1000)
    },
    onRefresh () {
      this.finished = false
      // 重新加载数据
      this.onLoad()
    }
  }
}
</script>
