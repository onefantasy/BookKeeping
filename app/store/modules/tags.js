import { 
	addTag,
	getTags
} from '@/api/tags.js'

const state = () => ({
  payTags: [],
  incomeTags: []
})

// getters
const getters = {
	payTags: state => state.payTags,
	incomeTags: state => state.incomeTags,
}

// actions
const actions = {
	// 添加标签
	async addTag(ctx, data) {
		const res = await addTag(data)
		return res
	},
	// 获取标签
	async getTags({ commit }, data) {
		await getTags(data).then(res => {
			// 保存标签内容
			res.payTags && (commit('SAVE_PAYTAGS', res.payTags))
			res.incomeTags && (commit('SAVE_INCOMETAGS', res.incomeTags))
			return Promise.resolve(res)
		}).catch(e => {
			return Promise.reject(e)
		})
	}
}

// mutations
const mutations = {
	// 添加支出标签
	SAVE_PAYTAGS(state, data) {
		state.payTags = data
	},
	// 添加收入标签
	SAVE_INCOMETAGS(state, data) {
		state.incomeTags = data
	}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}