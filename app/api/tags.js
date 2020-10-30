import request from '@/common/request.js'

export function addTag(data) {
	return request({
		url: '/tags/addTag',
		method: 'POST',
		data
	})
}

export function getTags(data) {
	return request({
		url: '/tags/getTags',
		method: 'GET',
		data
	})
}

export function delTag(data) {
	return request({
		url: '/tags/delTag',
		method: 'GET',
		data
	})
}