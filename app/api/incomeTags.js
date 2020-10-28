import request from '@/common/request.js'

export function addTag(data) {
	return request({
		url: '/incomeTags/addTag',
		method: 'POST',
		data
	})
}