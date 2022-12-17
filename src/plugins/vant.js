import Vue from 'vue'

// 按需全局引入 vant组件
import { Button, List, Cell, Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)
