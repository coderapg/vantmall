<template>
  <van-list finished-text="请添加商品">
    <van-swipe-cell>
      <div class="card-content">
        <van-checkbox v-model="checked" />
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://img01.yzcdn.cn/vant/cat.jpeg">
        </van-card>
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <div class="card-content">
        <van-checkbox v-model="checked" />
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://img01.yzcdn.cn/vant/cat.jpeg">
        </van-card>
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
      checked: true
    }
  }
}
</script>

<style lang="less" scoped>
  .van-list {
    margin: 10px;
    .van-swipe-cell {
      border-radius: 10px;
      margin-bottom: 8px;
      background-color: #fff;
      /deep/ .van-swipe-cell__wrapper {
        .card-content {
          display: flex;
          .van-checkbox {
            margin-left: 8px;
            padding-right: 4px;
          }
          .van-card {
            width: 100%;
            padding: 8px 8px;
            box-sizing: border-box;
            .van-card__content {
              .van-card__title {
                color: #000;
                font-size: 16px;
                font-weight: 500;
              }
              .van-card__desc {
                color: #999;
                font-size: 12px;
                margin-top: 6px;
              }
              .van-card__bottom {
                display: flex;
                justify-content: space-between;
                .van-card__price {
                  color: #ff6700;
                  .van-card__price-currency {
                    margin-right: 4px;
                  }
                  .van-card__price-currency,
                  .van-card__price-decimal {
                    font-size: 12px;
                  }
                  .van-card__price-integer {
                    font-size: 16px;
                  }
                }
                .van-card__num {
                  font-size: 16px;
                  color: #000;
                }
              }
            }
          }
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
