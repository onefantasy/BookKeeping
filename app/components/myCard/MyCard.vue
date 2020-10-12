<template>
	<view class="card" :class="{ shadow: isShadow }">
		<view class="cardTitle">
			<text class="cardName"><slot name="cardName">卡片名称</slot></text>
			<view class="cardSubtitle">
				<slot name="cardSubtitle"></slot>				
			</view>
		</view>
		<view class="cardContent">
			<slot name="cardContent">卡片内容</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isShadow: {
				type: Boolean,
				default: true
			}
		},
		name: 'my-card',
		data() {
			return {}
		},
		onLoad() {
			console.log('我的卡片组件。')
		}
	}
</script>

<style scoped lang="scss">
.card {
	width: 90%;
	border: 5rpx solid #888;
	border-radius: 10rpx;
	margin : 10rpx auto;
	padding: 10rpx;
	background-color: #fbf2e3;
	
	.cardTitle {
		border-bottom: 3rpx solid #666;
		color: #666;
		font-size: 50rpx;
		display: flex;
		
		.cardName {
			color: #fcd217;
		}
		
		.cardSubtitle {
			text-align: right;
			flex: 1;
			font-size: 30rpx;
			padding-top: 20rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
.shadow {
	box-shadow: 0rpx 0rpx 10rpx #bbb;
}
</style>
