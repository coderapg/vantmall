<template>
  <van-tabbar v-model="active" active-color="#ff6700" inactive-color="#333" class="tab-bar">
    <van-tabbar-item v-for="(item, index) in tabIcons" :key="index" :to="item.path" @click="handleTabBarItemClick(index)">
      <template>
        <van-icon class-prefix="icon" :name="item.name" />
      </template>
      <span>{{ item.title }}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>

export default {
  name: 'TabBar',
  data () {
    return {
      active: 0,
      tabIcons: [
        {
          title: '首页',
          name: 'shouye',
          path: '/home'
        },
        {
          title: '分类',
          name: 'fenlei',
          path: '/category'
        },
        {
          title: '购物车',
          name: 'gouwuche2',
          path: '/cart'
        },
        {
          title: '我的',
          name: 'wode',
          path: '/mine'
        }
      ]
    }
  },
  methods: {
    handleTabBarItemClick (index) {
      this.$emit('handleTabBarItemClick', index)
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-bar {
    height: 49px;
    background-color: #f8f8f8;
    .van-tabbar-item {
      /deep/ .van-tabbar-item__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 20px;
        }
        span {
          margin-top: 3px;
          font-size: 14px;
        }
      }
    }
    .van-tabbar-item--active {
      background-color: #f8f8f8;
    }
  }
</style>
