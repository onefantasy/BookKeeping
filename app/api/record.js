import request from '@/common/request.js'

export function save(data) {
	return request({
		url: '/records/save',
		method: 'POST',
		data
	})
}