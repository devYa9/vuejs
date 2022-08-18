import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // App state
    snackbar: false,
    snackbarOptions: {
      active: false,
      subject: '',
      success: false
    },

    // Products state
    isLoaded: false,
    products: [],
    cartProducts: [],
    cartProductId: 1,
    favoriteProducts: [],

    // search state
    search: {
      searchTerm: ''
    }

  },
  getters: {
    snackbarOptions: state => {
      return state.snackbarOptions
    },

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
    },

    searchTerm: state => {
      return state.search.searchTerm
    }
  },
  mutations: {

    // app mutations
    toggleSnackbar: (state, options) => {
      state.snackbarOptions = options
    },

    // Products mutations
    addToFavorite: (state, product) => {
      state.favoriteProducts.push(product)
    },
    removeFromFavorite: (state, product) => {
      state.favoriteProducts = state.favoriteProducts.filter(p => {
        return p.id != product.id
      })
    },
    addToCart: (state, product) => {
      console.log(state.cartProducts.length);
      state.cartProducts.push(product)
      console.log(state.cartProducts.length);
    },
    removeFromCart: (state, productId) => {
      state.cartProducts = state.cartProducts.filter(p => {
        return p.order.id != productId
      })
    },
    // end products mutations

    // searchmutation
    setSearchTerm: (state, term) => {
      state.search.searchTerm = term
    }
  },
  actions: {
    // app actions
    toggleSnackbar: (context, options) => {
      context.commit('toggleSnackbar', options)
    },

    // Products actions
    addToFavorite: (context, product) => {
      context.commit('addToFavorite', product)
    },
    removeFromFavorite: (context, product) => {
      context.commit('removeFromFavorite', product)
    },
    addToCart: (context, product) => {
      context.commit('addToCart', product)
    },
    removeFromCart: (context, productId) => {
      context.commit('removeFromCart', productId)
    },
    // End products actions

    // search actions
    setSearchTerm: (context, term) => {
      context.commit('setSearchTerm', term)
    }
  },
  modules: {}
})