import Vue from 'vue'

// 按需全局引入 vant组件
import { Button, List, Cell, Tabbar, TabbarItem, Icon, NavBar, Search, Toast } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Search)
Vue.use(Toast)
