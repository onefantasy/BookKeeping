<template>
	<view class="box">
		<!-- 图标 开始 -->
		<view class="iconBox bc">
			<image src="../../static/logo.png" mode="aspectFit" class="icon" />
		</view>
		<!-- 图标 结束 -->
		<!-- 输入部分 开始 -->
		<view class="inputBox">
			<input type="text" v-model="account" placeholder="账户" class="input" />
			<input type="password" v-model="password" placeholder="密码" class="input" />
			<input type="password" v-model="password2" placeholder="确认密码" class="input" />
		</view>
		<!-- 输入部分 结束 -->
		
		<!-- 按钮 开始 -->
		<view class="buttons">
			<button class="login bc" @click="register">注册</button>
		</view>
		<!-- 按钮 结束 -->
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				account: '', // 账户
				password: '', // 密码
				password2: '' // 确认密码
			}
		},
		methods: {
			register() {
				if (!this.account || !this.password || !this.password2) {
					uni.showToast({
						title: '请先输入信息！',
						duration: 2000,
						icon: 'none'
					})
					return false
				}
				if (this.password !== this.password2) {
					uni.showToast({
						title: '两次输入密码不一样！',
						duration: 2000,
						icon: 'none'
					})
					return false
				}
				const data = {
					account: this.account,
					password: this.password
				}
				this.$store.dispatch('user/register', data).then(res => {
					uni.showToast({
						title: '注册成功！',
						duration: 2000
					})
					this.resetInput()
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/login/index'
						})
					}, 1500)
				})
			},
			// 清空输入内容
			resetInput() {
				this.account = ''
				this.password = ''
				this.password2 = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		.iconBox {
			height: 30vh;
			position: relative;
			
			.icon {
				width: 150rpx;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		
		.inputBox {
			
			.input {
				height: 70rpx;
				font-size: 36rpx;
				width: 70%;
				margin: 20rpx auto;
				text-align: center;
				border-bottom: 5rpx solid #999;
			}
		}
		
		.buttons {
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.login {
				width: 70%;
			}
			
			.line {
				color: #f79a17;
				font-size: 25rpx;
				text-decoration: underline;
				margin-top: 20rpx;
			}
		}
	}
</style>
