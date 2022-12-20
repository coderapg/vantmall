import Vue from 'vue'

// 按需全局引入 vant组件
import { Button, List, Cell, Tabbar, TabbarItem, Icon, NavBar, Search, Toast, Swipe, SwipeItem, Image as VanImage, Grid, GridItem, Tab, Tabs, Tag, PullRefresh, Badge } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Search)
Vue.use(Toast)
Vue.use(Swipe).use(SwipeItem)
Vue.use(VanImage)
Vue.use(Grid).use(GridItem)
Vue.use(Tab).use(Tabs)
Vue.use(Tag)
Vue.use(PullRefresh)
Vue.use(Badge)
