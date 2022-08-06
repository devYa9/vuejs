import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    favoriteProducts: []
  },
  getters: {
    productsByCategory: state => (id) => {
      return state.products.filter(product => {
        return product.category.id == id
      })
    },
    favoriteProducts: state => {
      return state.favoriteProducts
    },
    cartProducts: state => {
      return state.products.slice(0, 4)
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

  },
  actions: {
    addToFavorite: (context, product) => {
      context.commit('addToFavorite', product)
    },
    removeFromFavorite: (context, product) => {
      context.commit('removeFromFavorite', product)
    }
  },
  modules: {}
})