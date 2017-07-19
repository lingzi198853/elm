import Vue from 'vue'
import Vuex from 'vuex'
import site from './site'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    site
  }
})
