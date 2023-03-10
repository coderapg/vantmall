import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

// 按需全局引入 vant组件
import './plugins/vant'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
