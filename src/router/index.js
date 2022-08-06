import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ComingSoon from '../views/ComingSoon.vue'
import ProductsByCategory from "../components/shop/ProductsByCategory";


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/shop/category/:id',
    name: 'category',
    component: ProductsByCategory
  },
  {
    path: '/:catchAll(.*)',
    name: 'commingSoon',
    component: ComingSoon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router