import Vue from 'vue'
import VueRouter from 'vue-router'
import lazyLoadView from "./loadRouter"
const Home = () => lazyLoadView(import('views/home/Home'))
// const Home = () =>import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Test = () => import('views/test/render/Test')
const AModule = () => import('views/test/attrListerners/a')
const asynComponent = () => lazyLoadView(import('views/test/asynComponent/index'))
const extend = () => import('views/test/extend/index')
// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/a',
    component: AModule
  },
  {
    path: '/asyn',
    component: asynComponent
  },
  {
    path:'/extend',
    component:extend
  }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
