// export default {
// 	login(data) {
// 		console.log('账户：', data.name)
// 		console.log('密码：', data.password)
// 		setTimeout(() => {
// 			console.log('api返回！！')
// 			return { status: 'ok' }
// 		}, 3000)
// 	}
// }

export function login(data) {
	return { status: 'ok' }
}