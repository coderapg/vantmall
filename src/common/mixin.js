// 封装点击返回按钮返回操作
export const handleBackMixin = {
  methods: {
    handleBack () {
      console.log('点击了')
      this.$router.back()
    }
  }
}
