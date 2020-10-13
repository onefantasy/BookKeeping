<template>
	<view>
		<view v-for="(item, index) in list" :key="index"  class="listItem">
			<view class="listTags">{{ item.tags.join('、') }}</view>
			<view class="listTime">{{ item.time }}</view>
			<view class="listNumber">{{ formatMoney(item.number) }}元</view>
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
					const list = [
						{ tags: ['信息项1', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 300 },
						{ tags: ['信息项2', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: -200 },
						{ tags: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 }
					]
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
		font-size: 10rpx;
		
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
</style>
