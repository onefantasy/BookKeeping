export default {
  data() {
    return {
      // 遮罩
      load: null
    }
  },
  beforeMount() {},
  beforeDestroy() {},
  mounted() {},
  methods: {
    // 格式华金额
	formatMoney(money = 0, digit = 3, separator = ',') {
		// 判断输入金额是否正确，如果错误，处理如下
		if (isNaN(+money)) {
			return  '数据错误！'
		}
		// 金额输入正确处理如下
		money = (money / 100).toFixed(2) + ''
		let array = money.split('.') // 将金额分割为整数与小数部分
		const reg = new RegExp(`\\B(?=(?:\\d{${digit}})+$)`, 'gi')
		array[0] = array[0].replace(reg, separator)
		return array.join('.')
	}
  }
}