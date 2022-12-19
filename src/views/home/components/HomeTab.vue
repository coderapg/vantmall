<template>
  <van-tabs v-model="active" @click="handleTabClick" sticky :offset-top="offsetTop">
    <van-tab v-for="(item, index) in tabsArr" :title="item" :key="index">
      <goods-list :active-goods="activeGoods" />
    </van-tab>
  </van-tabs>
</template>

<script>
import GoodsList from 'components/content/GoodsList/GoodsList'

export default {
  name: 'HomeTab',
  data () {
    return {
      active: 0
    }
  },
  components: {
    GoodsList
  },
  props: {
    offsetTop: {
      type: Number,
      default: 0,
      required: true
    },
    tabsArr: {
      type: Array,
      default () {
        return []
      },
      required: true
    },
    activeGoods: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  methods: {
    handleTabClick (index) {
      this.$emit('handleTabClick', index)
    }
  }
}
</script>
