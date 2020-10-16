import { login } from '@/api/user.js'

const state = () => ({
  name: ''
})

// getters
const getters = {}

// actions
const actions = {
	async loginAction({ commit }, data) {
		const result = await login(data)
		return result
	}
}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}