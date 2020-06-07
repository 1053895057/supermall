import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Test = () => import('views/test/Test')
const Detail = () =>import('views/detail/Detail')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path:'/test',
    name:'Test',
    component:Test
  },
  {
    path:'/detail',
    name:'Detail',
    component:Detail
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router