import { 
	login,
	register
} from '@/api/user.js'

const state = () => ({
  account: ''
})

// getters
const getters = {
	account: state => state.account
}

// actions
const actions = {
	// 登录
	async login(ctx, data) {
		login(data).then(res => {
			ctx.commit('SAVE_ACCOUNT', data.account)
			return res
		}).catch(e => Promise.reject(e))
	},
	// 注册
	async register(ctx, data) {
		const result = await register(data)
		return result
	},
	
	// 退出
	async logout(ctx, data) {
		// 清除登录缓存
		uni.removeStorageSync('account')
		uni.removeStorageSync('password')
	}
}

// mutations
const mutations = {
	// 保存登录的账号
	SAVE_ACCOUNT(state, account) {
		state.account = account
	}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}