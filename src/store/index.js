import Vue from 'vue'
import Vuex from 'vuex'
import update from './update'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    update
    // products
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
