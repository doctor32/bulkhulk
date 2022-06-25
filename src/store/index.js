import { createStore } from 'vuex'
import itemslist from './items/items.js'

export default createStore({
  state: {
    items: itemslist,
    menuOpened: false,
    otherItems: []
  },
  getters: {
  },
  mutations: {
    SET_OTHER_ITEMS (state, id) {
      state.otherItems = state.items.filter(item => item.id != id).sort(() => Math.random() - 0.5)
    }
  },
  actions: {
    SET_OTHER_ITEMS({commit}, id) {
      console.log(id);
      commit('SET_OTHER_ITEMS', id)
    }
  },
  modules: {
  }
})
