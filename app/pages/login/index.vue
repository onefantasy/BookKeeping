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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '', // 账户
				password: '' // 密码
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
	}
</style>
