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

const DEFAULT_TITLE = 'SoftBox Solutions';

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: DEFAULT_TITLE
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
    meta: {
      title: "SoftBox Shop"
    }
  },
  {
    path: '/shop/category/:id',
    name: 'category',
    component: ProductsByCategory,
    meta: {
      title: "SoftBox Shop"
    }
  },
  {
    path: '/shop/product/:id',
    name: 'product',
    component: ProductDetails,

    meta: {
      title: "SoftBox Shop"
    }

  },
  {
    path: '/shop/search',
    name: 'search',
    component: Search,
    meta: {
      title: "Search"
    }

  },
  {
    path: '/shop/checkout',
    name: 'checkout',
    component: Checkout,
    meta: {
      title: "Checkout"
    }

  },
  {
    path: '/:catchAll(.*)',
    name: 'commingSoon',
    component: ComingSoon,
    meta: {
      title: "SoftBox"
    }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router