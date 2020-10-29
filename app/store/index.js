import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import tags from './modules/tags.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		tags
	}
})