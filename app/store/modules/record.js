import {
	save,
	getRecords,
	getDetail
} from '@/api/record.js'

const state = () => ({})

const getters = {}

const actions = {
	// 保存记录
	async save({ commit }, data) {
		const res = await save(data)
		return res
	},
	// 获取记录
	async getRecords({ commit }, data) {
		const res = await getRecords(data)
		return res
	},
	// 获取明细
	async getDetail({ commit }, data) {
		const res = await getDetail(data)
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