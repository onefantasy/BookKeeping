import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import tags from './modules/tags.js'
import records from './modules/record.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		tags,
		records
	}
})