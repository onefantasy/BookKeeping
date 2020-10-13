<template>
	<view class="record bc">
		<!-- 金额 开始 -->
		<view class="money flex">
			<text>金额：</text>
			<input type="text" placeholder="请输入金额" v-model="money" />
			<text> 元</text>
		</view>
		<!-- 金额 结束 -->
		<!-- 流动 开始 -->
		<view class="flex">
			
		</view>
		<!-- 流动 结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: ''
			}
		},
		onLoad(e) {
			this.money = e.money
			console.log('携带的参数：', e)
		}
	}
</script>

<style lang="scss" scoped>
	.record {
		min-height: calc(100vh - 44px);
		padding: 20rpx;
		font-size: 36rpx;
		color: #666;
		
		.flex {
			display: flex;
		}
		
		.money {
			line-height: 50rpx;
			height: 50rpx;
			
			input {
				text-align: center;
				border-bottom: 5rpx solid #999;
			}
		}
	}
</style>
