import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login/Login')
const Home = () => import('../views/home/Home')
const Detail = () => import('../views/detail/Detail')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Shop = () => import('../views/shop/Shop')
const Mine = () => import('../views/mine/Mine')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
