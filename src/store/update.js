import {_products,logList} from '../api/demo'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  list:[],
  logList:[]
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  getAll(state){
    state.list = _products
  },
  getLogList(){
    state.logList = logList;
  },
  increment (state) {
    state.count++
    console.log(state.count)
  },
  decrement (state) {
    state.count--
  },
  cheng(state){
    state.count = state.count*10
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  getAll: ({ commit }) => commit('getAll'),
  getLogList: ({ commit }) => commit('getLogList'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  cheng:({commit})=>commit('cheng')
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default({
  state,
  getters,
  actions,
  mutations
})
