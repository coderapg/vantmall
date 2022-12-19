<template>
  <van-tabs v-model="active" @click="handleTabClick" :sticky="true" >
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
