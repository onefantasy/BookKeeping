const baseUrl = 'http://47.112.170.34:8082'
const withCredentials = false

async function request({ method, data, url } = {}) {
	uni.showLoading({
		title: '加载中'
	})
	const res = await uni.request({
		url: baseUrl + url,
		method,
		data,
		withCredentials
	})
	uni.hideLoading()
	const resData = res[1].data
	// 请求失败
	if (res[1].statusCode !== 200 || resData.code !== 200) {
		uni.showToast({
			title: resData.message || '请求失败！',
			icon: 'none'
		})
		return Promise.reject(resDate)
	}
	return Promise.resolve(resData)
}

export default request