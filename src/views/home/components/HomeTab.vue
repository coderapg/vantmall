<template>
  <van-tabs v-model="active" @click="handleTabClick">
    <van-tab v-for="item in tabsArr" :title="item.title" :key="item.pop">{{ item.title }}</van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: 'HomeTab',
  data () {
    return {
      active: 0
    }
  },
  props: {
    tabsArr: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  methods: {
    handleTabClick (name, title) {
      console.log('切换', name, title)
      // this.active = index
    }
  }
}
</script>

<style lang="less" scoped></style>
