import {
	save
} from '@/api/record.js'

const state = () => ({})

const getters = {}

const actions = {
	// 保存记录
	async save({ commit }, data) {
		const res = await save(data)
		return res
	}
}

const mutations = {}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}