import { 
	login,
	register
} from '@/api/user.js'

const state = () => ({
  name: ''
})

// getters
const getters = {}

// actions
const actions = {
	// 登录
	async login({ commit }, data) {
		const result = await login(data)
		return result
	},
	// 注册
	async register({ commit }, data) {
		const result = await register(data)
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