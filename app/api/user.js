import request from '@/common/request.js'

export function login(data) {
	return request({
		url: '/users/login',
		method: 'POST',
		data
	})
}

export function register(data) {
	return request({
		url: '/users/register',
		method: 'POST',
		data
	})
}