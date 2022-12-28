<template>
  <div class="goods-list" v-if="Object.keys(activeGoods).length > 0">
    <goods-list-item class="list-item" v-for="(item, index) in activeGoods" :key="index" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    activeGoods: {
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
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
