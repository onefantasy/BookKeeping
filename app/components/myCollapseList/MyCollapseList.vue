<template>
	<view>
		<!-- 折叠项 开始 -->
		<uni-collapse>
		    <uni-collapse-item v-for="(item, index) in list" :key="index">
		        <view slot="title" class="listItem">
					<view class="listTags">{{ index + 1 + '、' + (item.tags[0] ? item.tags.join('、') : item.info) }}</view>
					<view class="listTime">{{ item.date + ' ' + item.time }}</view>
					<view class="listmoney">{{ formatMoney(item.money) }}元</view>
				</view>
				<view class="detail" @click="goPage(item)">
					<view class="iconfont delRecord" @click.stop="delPupop(item)">&#xe695;</view>
					<view>时间：{{ item.date + ' ' + item.time }}</view>
					<view>流动：{{ item.flow }}</view>
					<view>金额：{{ formatMoney(item.money) }}</view>
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
		
		<!-- 删除弹窗 开始 -->
		<uni-popup ref="delPopup" type="dialog">
			<uni-popup-dialog type="warn" mode="base" content="确实删除该记录?" :before-close="true" @close="close"
			 @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<!-- 删除弹窗 结束 -->
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/popup.js'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import myTag from '@/components/myTag/MyTag.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import fun from '@/mix/fun/index.js'
	
	export default {
		name: 'my-collapse-list',
		components: {
			myTag,
			uniCollapse,
			uniCollapseItem,
			uniPopupDialog
		},
		props: {
			list: {
				type: Array,
				default: function() {
					const list = []
					return list
				}
			}
		},
		mixins: [fun],
		data() {
			return {
				// 想要删除的记录
				delItem: null
			}
		},
		methods: {
			// 跳转到编辑页面
			goPage(item) {
				const keys = Object.keys(item)
				let param = ''
				for (let key of keys) {
					param += key + '=' + item[key] + '&'
				}
				uni.navigateTo({
					url: '/pages/record/index?' + param
				})
			},
			// 调用删除弹窗
			delPupop(item) {
				this.$refs.delPopup.open()
				this.delItem = item
			},
			close(done) {
				this.delItem = null
				done()
			},
			confirm(done) {
				done()
				const data = {
					rid: this.delItem.rid,
					account: this.$store.getters['user/account']
				}
				this.delItem = null
				this.$store.dispatch('record/delRecord', data).then(res => {
					uni.showToast({
						title: '删除成功！',
						icon: 'none'
					})
					this.$emit('delSuccess')
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
		
		.listmoney {
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
		
		// 删除
		.delRecord {
			float: right;
			padding-right: 20rpx;
			font-size: 50rpx;
		}
	}
</style>
