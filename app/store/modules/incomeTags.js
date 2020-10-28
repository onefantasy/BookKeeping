import { 
	addTag
} from '@/api/incomeTags.js'

const state = () => ({
  tags: []
})

// getters
const getters = {
	tags: state => state.tags
}

// actions
const actions = {
	// 添加标签
	async addTag(ctx, data) {
		const res = await addTag(data)
		return res
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