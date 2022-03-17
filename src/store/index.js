import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isToggle: false,
  },
  mutations: {
    loginUser(state) {
      state.isLogin = true
    },
    logoutUser(state) {
      state.isLogin = false
    },
    toggleLabel(state) {
      state.isToggle = !state.isToggle
    },
    toggleSidebar(state) {
      state.isToggle = false
    }
  },
  actions: {
  },
  modules: {
  }
})
