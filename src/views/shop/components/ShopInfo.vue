<template>
  <div class="shop-info">
    <div class="info">
      <van-card>
        <template #thumb>
          <van-image
            src="https://img01.yzcdn.cn/vant/ipad.jpeg" />
        </template>
        <template #desc>
          <div>信购数码配件专营店</div>
        </template>
        <template #tags>
          <van-tag color="#ff6700" round type="primary">天猫</van-tag>
        </template>
        <template #price>
          <div>粉丝数15.3万</div>
        </template>
        <template #num>
          <van-button text="订阅" color="#ff6700" icon="plus" round plain type="primary" size="small" />
        </template>
      </van-card>
      <div class="info-foot">
        <p class="info-experience">
          综合体验<van-rate readonly size="14" gutter="2px" color="#ff6700" allow-half void-icon="star" void-color="#d9d9d9" v-model="value" />
        </p>
        <p class="info-desc">
          <span>由天猫评估，含品质、物流、售后等多项内容，星星越多体验越好。</span>
          <van-icon name="arrow" />
        </p>
      </div>
    </div>
    <div class="shop-desc">
      <div class="shop-desc-item">
        <span class="item-title">描述相符</span>
        <span class="item-length">
          <van-progress
            :percentage="4.7 | percentageNum"
            stroke-width="10px"
            track-color="#f4f4f4"
            :show-pivot="false"
            color="linear-gradient(to right, #cced3c, #eb6f25)" />
        </span>
        <span class="item-rate">4.7</span>
        <span class="item-descs">低于同行-2.02%</span>
      </div>
      <div class="shop-desc-item">
        <span class="item-title">服务态度</span>
        <span class="item-length">
          <van-progress
            :percentage="4.8 | percentageNum"
            stroke-width="10px"
            track-color="#f4f4f4"
            :show-pivot="false"
            color="linear-gradient(to right, #cced3c, #eb6f25)" />
        </span>
        <span class="item-rate">4.8</span>
        <span class="item-descs">低于同行-.075%</span>
      </div>
      <div class="shop-desc-item">
        <span class="item-title">物流服务</span>
        <span class="item-length">
          <van-progress
            :percentage="4.8 | percentageNum"
            stroke-width="10px"
            track-color="#f4f4f4"
            :show-pivot="false"
            color="linear-gradient(to right, #cced3c, #eb6f25)" />
        </span>
        <span class="item-rate">4.8</span>
        <span class="item-descs">低于同行-.073%</span>
      </div>
    </div>
    <div class="base-info">
      <div class="base-info-title">基础信息</div>
      <div class="info-content">
        <div class="content-item">
          <span class="item-title">掌柜名</span>
          <span class="item-name">
            <i></i>
            信购数码配件专营店
          </span>
        </div>
        <div class="content-item">
          <span class="item-title">所在地</span>
          <span class="item-name">广东省-深圳市</span>
        </div>
        <div class="content-item">
          <span class="item-title">保证金</span>
          <span class="item-name">
            <i></i>
            已签署消保协议
          </span>
        </div>
        <div class="content-item">
          <span class="item-title">资质证照</span>
          <span class="item-name right-model">
            <i></i>
            <i></i>
          </span>
        </div>
        <div class="content-item">
          <span class="item-title">店铺名片</span>
          <span class="item-name right-model">
            <i></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShopInfo',
  data () {
    return {
      value: 4.7
    }
  },
  filters: {
    percentageNum (val) {
      return val * 20
    }
  }
}
</script>

<style lang="less" scoped>
  .shop-info {
    .info {
      background: #fff;
      .van-card {
        border-bottom: 1px solid #f2f2f2;
      }
      .info-foot {
        .info-experience {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #ff6700;
          .van-rate {
            margin-left: 5px;
          }
        }
        .info-desc {
          font-size: 12px;
          display: flex;
          justify-items: center;
          align-items: center;
        }
      }
    }
    .van-card,
    .info-foot,
    .shop-desc,
    .base-info {
      padding: 8px 10px;
    }
    .shop-desc {
      margin-top: 12px;
      background-color: #fff;
      .shop-desc-item {
        display: flex;
        align-items: center;
        margin: 15px 0;
        font-size: 12px;
        .item-title {
          width: 60px;
        }
        .item-length {
          flex: 1;
          /deep/ .van-progress {
            width: 100%;
            .van-progress__portion {
              width: 100%!important;
            }
          }
        }
        .item-rate {
          width: 30px;
          text-align: center;
        }
        .item-descs {
          width: 100px;
        }
      }
    }
    .base-info {
      .base-info-title {
        font-size: 14px;
        color: #0d0e10;
        font-weight: bold;
        margin: 2px 0 10px 0;
      }
      .info-content {
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
        font-size: 12px;
        .content-item {
          display: flex;
          justify-items: center;
          line-height: 30px;
          justify-content: space-between;
          .item-title {
            color: #333;
          }
          .item-name {
            color: #484848;
          }
          .right-model {
            position: relative;
          }
          .right-model::after {
            content: '>';
            display: block;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
