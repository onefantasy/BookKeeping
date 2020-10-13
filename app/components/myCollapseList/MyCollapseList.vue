<template>
	<view>
		<!-- 折叠项 开始 -->
		<uni-collapse>
		    <uni-collapse-item v-for="(item, index) in list" :key="index">
		        <view slot="title" class="listItem">
					<view class="listTags">{{ index + 1 + '、' + item.tags.join('、') }}</view>
					<view class="listTime">{{ item.time }}</view>
					<view class="listNumber">{{ formatMoney(item.number) }}元</view>
				</view>
				<view class="detail">
					展开项
				</view>
		    </uni-collapse-item>
		</uni-collapse>
		<!-- 折叠项 结束 -->
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import fun from '@/mix/fun/index.js'
	
	export default {
		name: 'my-collapse-list',
		components: {
			uniCollapse,
			uniCollapseItem
		},
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
		mixins: [fun],
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
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
	
	.detail {
		padding: 12px;
		font-size: 10rpx;
		height: 25rpx;
		line-height: 25rpx;
	}
</style>
