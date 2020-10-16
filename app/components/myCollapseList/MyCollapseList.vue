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
				<view class="detail" @click="goPage(item)">
					<view>时间：{{ item.time }}</view>
					<view>流动：{{ item.flow }}</view>
					<view>金额：{{ item.number }}</view>
					<view class="tags">
						<text>标签：</text>
						<my-tag v-for="(unit, i) in item.tags" :key="i + unit" :tagContent="unit" :colorIndex="i"></my-tag>
					</view>
					<view>
						备注：{{ item.info }}
					</view>
				</view>
		    </uni-collapse-item>
		</uni-collapse>
		<!-- 折叠项 结束 -->
	</view>
</template>

<script>
	import myTag from '@/components/myTag/MyTag.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import fun from '@/mix/fun/index.js'
	
	export default {
		name: 'my-collapse-list',
		components: {
			myTag,
			uniCollapse,
			uniCollapseItem
		},
		props: {
			list: {
				type: Array,
				default: function() {
					const list = [
						{ info: '备注信息项，十分重要！能够从不同的数据区分，迅速找到自己想要的数据！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', tags: ['信息项1', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', flow: '收入', number: 300 },
						{ info: '备注信息项，十分重要！能够从不同的数据区分，迅速找到自己想要的数据！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', tags: ['信息项2', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', flow: '支出', number: -200 },
						{ info: '备注信息项，十分重要！能够从不同的数据区分，迅速找到自己想要的数据！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', tags: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', flow: '收入', number: 400 }
					]
					return list
				}
			}
		},
		mixins: [fun],
		data() {
			return {}
		},
		methods: {
			// 跳转到编辑页面
			goPage(item) {
				const keys = Object.keys(item)
				console.log('键：', keys)
				let param = ''
				for (let key of keys) {
					param += key + '=' + item[key] + '&'
				}
				console.log('param：', param)
				uni.navigateTo({
					url: '/pages/record/index?' + param
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
	
	.detail {
		font-size: 25rpx;
		padding: 12rpx;
		color: #666;
		
		>view {
			margin: 10rpx 0;
		}
		
		.tags {
			display: flex;
			flex-wrap: wrap;
			line-height: 70rpx;
		}
	}
</style>
