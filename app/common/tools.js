function formatMoney(money = 0, digit = 3, separator = ',') {
	console.log("startTime:", Date.now())
	// 判断输入金额是否正确，如果错误，处理如下
	if (isNaN(+money)) {
		return  '数据错误！'
	}
	// 金额输入正确处理如下
	money = (money / 100).toFixed(2) + ''
	let array = money.split('.') // 将金额分割为整数与小数部分
	const reg = new RegExp(`\\B(?=(?:\\d{${digit}})+$)`, 'gi')
	array[0] = array[0].replace(reg, separator)
	console.log('endTime:', Date.now())
	return array.join('.')
}

module.exports = {
	formatMoney
}