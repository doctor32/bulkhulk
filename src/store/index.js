import { createStore } from 'vuex'
import itemslist from './items/items.js'

export default createStore({
  state: {
    items: itemslist,
    menuOpened: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
