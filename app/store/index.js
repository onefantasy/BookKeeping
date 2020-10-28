import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import incomeTags from './modules/incomeTags.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
	user,
	incomeTags
  }
})