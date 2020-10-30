<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			// #ifdef H5
			// 仓库中不存在账号，直接返回登录页面
			if (!this.$store.getters['user/account']) {
				uni.reLaunch({
					url: 'pages/login/index'
				})
			}
			// #endif
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 引入icon */
	@import './static/css/icon.css';
	
	.iconfont {
		font-family: "iconfont" !important;
	}
	
	/*每个页面公共css */
	.bc {
		background-color: #f7e8aa;
	}
</style>
