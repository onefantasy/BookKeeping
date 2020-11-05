<template>
	<view>
		<view v-if="list[0]">
			<view v-for="(item, index) in list" :key="index"  class="listItem">
				<view class="listTags">{{ item.tags || item.info }}</view>
				<view class="listTime">{{ item.date + ' ' + item.time }}</view>
				<view class="listNumber">{{ formatMoney(item.money) }}元</view>
			</view>
		</view>
		<view v-else class="textNone">
			暂无记录
		</view>
	</view>
</template>

<script>
	import fun from '@/mix/fun/index.js'
	
	export default {
		name: 'my-list',
		mixins: [ fun ],
		props: {
			list: {
				type: Array,
				default: function() {
					const list = []
					return list
				}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style scoped lang="scss">
	.listItem {
		display: flex;
		padding: 10rpx;
		font-size: 25rpx;
		
		.listTags {
			width: 50%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		
		.listTime {
			text-align: center;
		}
		
		.listNumber {
			flex: 1;
			text-align: right;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	
	// 暂无内容 样式
	.textNone {
		text-align: center;
		font-size: 30rpx;
		font-weight: 700;
		color: rgba(51, 51, 51, .3);
	}
</style>
