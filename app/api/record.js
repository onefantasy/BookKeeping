import request from '@/common/request.js'

export function save(data) {
	return request({
		url: '/records/save',
		method: 'POST',
		data
	})
}

export function getRecords(data) {
	return request({
		url: '/records/getRecords',
		method: 'GET',
		data
	})
}