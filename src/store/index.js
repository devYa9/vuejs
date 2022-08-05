import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    productsByCategory: state => (id) => {
      return state.products.filter(product => {
        return product.category.id == id
      })
    },
    favorite: state => {
      return state.products[0]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})