import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ComingSoon from '../views/ComingSoon.vue'
import ProductsByCategory from "../views/ProductsByCategory";
import ProductDetails from "../views/ProductDetails";
import Search from "../views/Search";
import Checkout from "../views/Checkout.vue";


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
    path: '/shop/product/:id',
    name: 'product',
    component: ProductDetails
  },
  {
    path: '/shop/search',
    name: 'search',
    component: Search
  },
  {
    path: '/shop/checkout',
    name: 'checkout',
    component: Checkout
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