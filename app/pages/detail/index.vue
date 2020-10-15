<template>
	<view class="box bc">
		<!-- 导航栏 开始 -->
		<view class="nav">
			<!-- 标签 开始 -->
			<view>
				<picker @change="tagsChange" :value="tagsIndex" :range="tags">
					<view>{{tags[tagsIndex]}}</view>
				</picker>
			</view>
			<!-- 标签 结束 -->
			<!-- 收入支出 开始 -->
			<view>
				<picker @change="situationChange" :value="situationIndex" :range="situation">
					<view>{{situation[situationIndex]}}</view>
				</picker>
			</view>
			<!-- 收入支出 结束 -->
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
			<my-collapse-list></my-collapse-list>
		</view>
		<!-- 列表 结束 -->
	</view>
</template>

<script>
	import myCollapseList from '@/components/myCollapseList/MyCollapseList.vue'
	
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 100;
		} else if (type === 'end') {
			year = year + 100;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	
	export default {
		components: {
			myCollapseList
		},
		data() {
			return {
				// 标签
				tags: [
					'不限',
					'出行',
					'饮料',
					'游戏',
					'工资',
					'买彩票',
					'搭公交',
					'一日三餐'
				],
				// 标签索引
				tagsIndex: 0,
				// 收入支出标志
				situation: ['不限', '收入', '支出'],
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
				 list: [
					 { info: ['信息项1', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 300 },
					 { info: ['信息项2', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: -200 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 },
					 { info: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 50000000000 }
				 ]
			}
		},
		methods: {
			tagsChange(e) {
				this.tagsIndex = e.target.value
			},
			situationChange(e) {
				this.situationIndex = e.target.value
			},
			startDateChange(e) {
				this.startDate = e.detail.value
			},
			endDateChange(e) {
				this.endDate = e.detail.value
			},
			showTypeChange(e) {
				this.showTypeIndex = e.detail.value
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
			// top: 44px;
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
	}
</style>
