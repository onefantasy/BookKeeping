<template>
	<view class="box">
		<!-- 图标 开始 -->
		<view class="iconBox bc">
			<image src="../../static/logo.png" mode="aspectFit" class="icon" />
		</view>
		<!-- 图标 结束 -->
		<!-- 输入部分 开始 -->
		<view class="inputBox">
			<input type="text" v-model="name" placeholder="账户" class="input" />
			<input type="password" v-model="password" placeholder="密码" class="input" />
		</view>
		<!-- 输入部分 结束 -->
		
		<!-- 按钮 开始 -->
		<view class="buttons">
			<button class="login bc" @click="login">登录</button>
			<view class="line">
				<a @click="goPage('/pages/password/index')">忘记密码</a>
				<text>|</text>
				<a @click="goPage('/pages/register/index')">注册账号</a>
			</view>
		</view>
		<!-- 按钮 结束 -->
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				name: '', // 账户
				password: '' // 密码
			}
		},
		methods: {
			login() {
				if (!this.name || !this.password) {
					uni.showToast({
						title: '请先输入账户密码！',
						duration: 2000,
						icon: 'none'
					})
					return false
				}
				const data = {
					name: this.name,
					password: this.password
				}
				this.$store.dispatch('user/loginAction', data).then(res => {
					uni.showToast({
						title: '登录成功！',
						duration: 2000,
						icon: 'none'
					})
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}).catch(err => {
					uni.showToast({
						title: '登录失败！',
						duration: 2000,
						icon: 'none'
					})
				})
			},
			// 跳转到其他页面
			goPage(url) {
				if (!url) return false
				uni.navigateTo({
					url
				})
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
				
				text {
					margin: 0 10rpx;
				}
			}
		}
	}
</style>
