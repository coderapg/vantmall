<template>
  <div class="goods-list-item" v-if="Object.keys(goodsItem).length > 0">
    <div class="list-item-content" @click="handleGoodsListItmClick">
      <van-image fit="contain" :src="goodsItem.show.img" />
      <div class="goods-item-info">
        <p class="title">{{ goodsItem.title }}</p>
        <div class="info-tags" v-if="goodsItem.titleTags">
          <van-tag color="#ff6700" plain>标签1</van-tag>
          <van-tag color="#ff6700" plain>标签2</van-tag>
        </div>
        <div class="item-price">
          <span class="price"><em>¥</em>{{ goodsItem.price }}</span>
          <span class="buy">{{ goodsItem.cfav }}+人已购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      },
      required: true
    }
  },
  methods: {
    handleGoodsListItmClick () {
      const { iid } = this.goodsItem
      this.$router.push({
        path: '/detail',
        query: {
          iid
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-list-item {
    background-color: #fff;
    width: 49%;
    border-radius: 10px;
    overflow: hidden;
    .list-item-content {
      display: block;
      .goods-item-info {
        padding: 2px 6px;
        .title {
          width: 100%;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          text-indent: 2em;
          font-size: 14x;
          color: #000;
        }
        .info-tags {
          .van-tag {
            margin-right: 4px;
          }
        }
        .item-price {
          line-height: 32px;
          .price {
            font-size: 18px;
            color: #ff6700;
            margin-right: 6px;
            em {
              font-size: 12px;
              margin-right: 4px;
            }
          }
          .buy {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
</style>
