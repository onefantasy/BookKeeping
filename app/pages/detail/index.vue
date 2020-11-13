<template>
	<view class="box bc">
		<!-- 导航栏 开始 -->
		<view class="nav">
			<!-- 收入支出 开始 -->
			<view>
				<picker @change="situationChange" :value="situationIndex" :range="situation">
					<view>{{situation[situationIndex]}}</view>
				</picker>
			</view>
			<!-- 收入支出 结束 -->
			<!-- 标签 开始 -->
			<view>
				<picker @change="tagsChange" :value="tagsIndex" :range="tags">
					<view>{{tags[tagsIndex]}}</view>
				</picker>
			</view>
			<!-- 标签 结束 -->
			<!-- 起始时间 开始 -->
			<view>
				<picker mode="date" :value="startDate" @change="startDateChange">
					<view>{{startDate}}</view>
				</picker>
			</view>
			<!-- 起始时间 结束 -->
			<!-- 截至时间 开始 -->
			<view>
				<picker mode="date" :value="endDate" @change="endDateChange">
					<view>{{endDate}}</view>
				</picker>
			</view>
			<!-- 截至时间 结束 -->
			<!-- 展示形式 开始 -->
			<view>
				<picker @change="showTypeChange" :value="showTypeIndex" :range="showType">
					<view>{{showType[showTypeIndex]}}</view>
				</picker>
			</view>
			<!-- 展示形式 结束 -->
		</view>
		<!-- 导航栏 结束 -->
		<!-- 列表 开始 -->
		<view class="contentBox">
			<my-collapse-list v-if="list[0]" :list="list" @delSuccess="getRecords" />
			<view v-else class="noRcord iconfont">
				<view class="noIcon">&#xe602;</view>
				<view>暂无记录</view>
			</view>
		</view>
		<!-- 列表 结束 -->
	</view>
</template>

<script>
	import myCollapseList from '@/components/myCollapseList/MyCollapseList.vue'
	
	function getDate(type) {
		const date = new Date()
	
		let year = date.getFullYear()
		let month = date.getMonth() + 1
		let day = date.getDate()
	
		if (type === 'start') {
			year = year - 5
		} else if (type === 'end') {
			year = year + 5
		}
		month = month > 9 ? month : '0' + month
		day = day > 9 ? day : '0' + day
	
		return `${year}-${month}-${day}`
	}
	
	export default {
		components: {
			myCollapseList
		},
		data() {
			return {
				// 全部的标签
				all: '全部',
				// 标签
				tags: [],
				// 标签索引
				tagsIndex: 0,
				// 支出标签
				payTags: [],
				// 收入标签
				incomeTags: [],
				// 收入支出标志
				situation: ['不限', '支出', '收入'],
				// 收入支出索引
				situationIndex: 0,
				// 开始时间
				startDate: getDate('start'),
				// 结束时间
				endDate: getDate('end'),
				// 展示形式
				showType: ['列表', '统计'],
				// 展示形式索引
				showTypeIndex: 0,
				// 信息列表
				list: [],
				// 是否发起请求
				isGetRecord: false
			}
		},
		onLoad(query) {
			// 获取支出和收入标签
			this.payTags = this.$store.getters['tags/payTags'].map(item => item.content)
			this.incomeTags = this.$store.getters['tags/incomeTags'].map(item => item.content)
			!!(+query.index) && (this.situationIndex = +query.index)
		},
		onShow() {
			// 如果当前没有发起请求，则发起
			this.isGetRecord || this.getRecords()
		},
		watch: {
			'situationIndex'() {
				this.setTags(this.situationIndex)
			}
		},
		methods: {
			// 获取列表信息
			getRecords() {
				const data = {
					account: this.$store.getters['user/account'],
					startDate: this.startDate,
					endDate: this.endDate,
				}
				this.tagsIndex !== 0 && (data.tags = this.tags[this.tagsIndex])
				this.situationIndex !== 0 && (data.flow = this.situation[this.situationIndex])
				this.isGetRecord = true
				this.$store.dispatch('record/getDetail', data).then(res => {
					this.list = res.list.map(item => {
						item.tags = !!item.tags ? item.tags.split(',') : []
						return item
					})
				}).finally(() => this.isGetRecord = false)
			},
			tagsChange(e) {
				this.tagsIndex = e.target.value
				this.getRecords()
			},
			situationChange(e) {
				this.situationIndex = e.target.value
			},
			startDateChange(e) {
				this.startDate = e.detail.value
				this.getRecords()
			},
			endDateChange(e) {
				this.endDate = e.detail.value
				this.getRecords()
			},
			showTypeChange(e) {
				this.showTypeIndex = e.detail.value
				uni.showToast({
					title: '功能开发中......',
					icon: 'none'
				})
			},
			// 重置标签选项
			setTags(index) {
				const tags = [this.all]
				if ([0, 1].indexOf(index) !== -1) {
					tags.push(...this.payTags)
				}
				if ([0, 2].indexOf(index) !== -1) {
					tags.push(...this.incomeTags)
				}
				this.tags = tags
				this.tagsIndex = 0
				this.getRecords()
			}
		}
	}
</script>

<style scoped lang="scss">
	.box {
		min-height: calc(100vh);
		
		.nav {
			display: flex;
			text-align: center;
			box-shadow: 3rpx 3rpx 6rpx #aaa;
			background-image: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(68, 68, 68, .8), rgba(0, 0, 0, .8));
			position: fixed;
			width: 100%;
			
			view {
				flex: 1;
				height: 60rpx;
				line-height: 60rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #fff;
			}
			
			view + view {
				border-left: 3rpx solid #aaa;
			}
		}
		
		// 详细内容
		.contentBox {
			padding-top: 60rpx;
		}
		
		// 没有记录
		.noRcord {
			margin: 100rpx auto;
			text-align: center;
			color: rgba(22, 22, 22, .3);
			
			.noIcon {
				font-size: 200rpx;
				font-weight: 700;
			}
		}
	}
</style>
