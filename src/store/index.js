import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cartProducts: [],
    favoriteProducts: [],
    isLoaded: false
  },
  getters: {
    products: state => {
      return state.products
    },
    productsByCategory: state => (id) => {
      return state.products.filter(product => {
        return product.category.id == id
      })
    },
    favoriteProducts: state => {
      return state.favoriteProducts
    },
    cartProducts: state => {
      return state.cartProducts
    },
    cartTotal: state => {
      let total = 0
      state.cartProducts.forEach(item => {
        let t = item.order.qte * item.product.price
        total += t
      });
      return total
    }
  },
  mutations: {
    addToFavorite: (state, product) => {
      state.favoriteProducts.push(product)
    },
    removeFromFavorite: (state, product) => {
      state.favoriteProducts = state.favoriteProducts.filter(p => {
        return p.id != product.id
      })
    },
    addToCart: (state, product) => {
      state.cartProducts.push(product)
    },
    removeFromCart: (state, product) => {
      state.cartProducts = state.cartProducts.filter(p => {
        return p.id != product.id
      })
    },

  },
  actions: {
    addToFavorite: (context, product) => {
      context.commit('addToFavorite', product)
    },
    removeFromFavorite: (context, product) => {
      context.commit('removeFromFavorite', product)
    },
    addToCart: (context, product) => {
      context.commit('addToCart', product)
    },
    removeFromCart: (context, product) => {
      context.commit('removeFromCart', product)
    },
  },
  modules: {}
})