<template>
	<view class="content bc">
		<!-- 记账 开始 -->
		<my-card>
			<text slot="cardName" class="card-book-keeping-name">记账</text>
			<view slot="cardContent" class="card-book-keeping-content">
				<input type="text" class="input-number" placeholder="输入金额(正负表示收入支出)" v-model="money">
				<button class="record" @click="record">记录</button>
			</view>
		</my-card>
		<!-- 记账 结束 -->
		<!-- 支出统计 开始 -->
		<my-card>
			<text slot="cardName" @click="goDetail('支出')">支出统计</text>
			<text slot="cardSubtitle">共{{ formatMoney(payAll) }}元</text>
			<my-list slot="cardContent"></my-list>
		</my-card>
		<!-- 支出统计 结束 -->
		<!-- 收入统计 开始 -->
		<my-card>
			<text slot="cardName" @click="goDetail('收入')">收入统计</text>
			<text slot="cardSubtitle">共{{ formatMoney(income) }}元</text>
			<my-list slot="cardContent"></my-list>
		</my-card>
		<!-- 收入统计 结束 -->
		<!-- 支出标签 开始 -->
		<my-card>
			<text slot="cardName">支出标签</text>
			<button slot="cardSubtitle" class="cardSubtitleButton">添加</button>
			<view slot="cardContent" class="tagBox">
				<my-tag v-for="(item, index) in tags" :key="index + item" :colorIndex="index" :tagContent="item"></my-tag>
			</view>
		</my-card>
		<!-- 支出标签 结束 -->
		<!-- 收入标签 开始 -->
		<my-card>
			<text slot="cardName">收入标签</text>
			<button slot="cardSubtitle" class="cardSubtitleButton">添加</button>
			<view slot="cardContent" class="tagBox">
				<my-tag v-for="(item, index) in tags" :key="index + item" :colorIndex="index" :tagContent="item"></my-tag>
			</view>
		</my-card>
		<!-- 收入标签 结束 -->
		<!-- 账本总情况 开始 -->
		<view class="total">
			<view class="totalWord">目前收入总情况：</view>
			<view class="totalNumber">{{ formatMoney(income - payAll) }}元</view>
		</view>
		<!-- 账本总情况 结束 -->
	</view>
</template>

<script>
	import myCard from '@/components/myCard/MyCard.vue'
	import myTag from '@/components/myTag/MyTag.vue'
	import myList from './children/Mylist.vue'
	import fun from '@/mix/fun/index.js'
	
	export default {
		components: {
			myCard,
			myList,
			myTag
		},
		mixins: [ fun ],
		data() {
			return {
				money: '', // 记账金额
				payAll: 200, // 支出统计总金额
				income: 200000000, // 收入统计金额
				tags: [
					'饮料',
					'共享电单车',
					'滴滴出行',
					'工资',
					'炒股利息',
					'全款购房',
					'中彩票',
					'小说收益'
				]
			}
		},
		onLoad() {
			console.log('页面开始！')
		},
		methods: {
			// 记账功能
			record() {
				let money = +this.money
				console.log('数据类型：', Object.prototype.toString.call(money))
				console.log('money:', money)
			},
			// 跳转到详情页面
			goDetail(type) {
				uni.navigateTo({
					url: '/pages/detail/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// background-color: #f7e8aa;
		min-height: calc(100vh - 44px);
		// margin-top: 44px;
		padding: 30rpx 0;

		// 记账 开始
		.card-book-keeping-content {
			display: flex;
			align-items: center;
			padding: 10rpx;
			
			.input-number {
				width: 80%;
				color: #666;
				height: 90rpx;
				text-align: center;
			}
			
			.record {
				flex: 1;
				background-color: #fcd217;
				border: 0;
			}
		}
		// 记账 结束
		
		// 副标题按钮
		.cardSubtitleButton {
			width: 100rpx;
			float: right;
			height: 40rpx;
			line-height: 40rpx;
			font-size: 16rpx;
			background-color: #fcd217;
			color: #fff;
			
		}
		
		.tagBox {
			display: flex;
			flex-wrap: wrap;
		}
		
		// 总体情况 开始
		.total {
			display: flex;
			
			.totalWord {
				text-align: left;
			}
			
			.totalNumber {
				text-align: right;
			}
		}
		// 总体情况 结束
	}
</style>
