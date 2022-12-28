import Vue from 'vue'

// 按需全局引入 vant组件
import { Badge, Button, Card, Cell, Checkbox, CheckboxGroup, Field, GoodsAction, GoodsActionButton, GoodsActionIcon, Grid, GridItem, Icon, Image as VanImage, List, NavBar, Progress, PullRefresh, Rate, Search, SubmitBar, Swipe, SwipeItem, SwipeCell, Tab, Tabs, Tabbar, TabbarItem, Tag, Toast } from 'vant'
Vue.use(Badge).use(Button)
Vue.use(Card).use(Cell).use(Checkbox).use(CheckboxGroup)
Vue.use(Field)
Vue.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Grid).use(GridItem)
Vue.use(Icon).use(VanImage)
Vue.use(List)
Vue.use(NavBar)
Vue.use(Progress).use(PullRefresh)
Vue.use(Rate)
Vue.use(Search)
Vue.use(SubmitBar)
Vue.use(Swipe).use(SwipeItem).use(SwipeCell)
Vue.use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Tag).use(Toast)
