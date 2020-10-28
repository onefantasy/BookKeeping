<template>
	<view class="content bc">
		<!-- 记账 开始 -->
		<my-card>
			<text slot="cardName" class="card-book-keeping-name">记账</text>
			<view slot="cardContent" class="card-book-keeping-content">
				<input type="text" class="input-number" placeholder="输入金额(正负表示收入支出)" v-model="money">
				<button class="record iconfont" @click="record">&#xe604; 记录</button>
			</view>
		</my-card>
		<!-- 记账 结束 -->
		<!-- 支出统计 开始 -->
		<my-card>
			<text slot="cardName" @click="goDetail('支出')">支出统计</text>
			<text slot="cardSubtitle">共{{ formatMoney(payAll) }}元</text>
			<my-list slot="cardContent" :list="payList"></my-list>
		</my-card>
		<!-- 支出统计 结束 -->
		<!-- 收入统计 开始 -->
		<my-card>
			<text slot="cardName" @click="goDetail('收入')">收入统计</text>
			<text slot="cardSubtitle">共{{ formatMoney(income) }}元</text>
			<my-list slot="cardContent" :list="incomeList"></my-list>
		</my-card>
		<!-- 收入统计 结束 -->
		<!-- 支出标签 开始 -->
		<my-card>
			<text slot="cardName">支出标签</text>
			<button slot="cardSubtitle" class="cardSubtitleButton iconfont" @click="addTag(0)">&#xe68a; 添加</button>
			<view slot="cardContent" class="tagBox">
				<view v-if="tags[0]">
					<my-tag v-for="(item, index) in tags" :key="index + item" :colorIndex="index" :tagContent="item" :isOpen="true"></my-tag>
				</view>
				<view v-else class="textNone">
					暂无标签
				</view>
			</view>
		</my-card>
		<!-- 支出标签 结束 -->
		<!-- 收入标签 开始 -->
		<my-card>
			<text slot="cardName">收入标签</text>
			<button slot="cardSubtitle" class="cardSubtitleButton iconfont" @click="addTag(1)">&#xe68a; 添加</button>
			<view slot="cardContent" class="tagBox">
				<view v-if="tags[0]">
					<my-tag v-for="(item, index) in tags" :key="index + item" :colorIndex="index" :tagContent="item" :isOpen="true"></my-tag>
				</view>
				<view v-else class="textNone">
					暂无标签
				</view>
			</view>
		</my-card>
		<!-- 收入标签 结束 -->
		<!-- 账本总情况 开始 -->
		<view class="total">
			<view class="totalWord">目前收入总情况：</view>
			<view class="totalNumber">{{ formatMoney(income - payAll) }}元</view>
		</view>
		<!-- 账本总情况 结束 -->
		<!-- 退出 开始 -->
		<view class="logoutBox">
			<button type="default" class="iconfont" @click="logout">&#xe62e; 退出登录</button>
		</view>
		<!-- 退出 结束 -->
		<!-- 添加标签弹窗 开始 -->
		<uni-popup ref="addTagPopup" type="dialog">
			<uni-popup-dialog type="warn" mode="input" placeholder="新标签名称" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<!-- 添加标签弹窗 结束 -->
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/popup.js'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import myCard from '@/components/myCard/MyCard.vue'
	import myTag from '@/components/myTag/MyTag.vue'
	import myList from '@/components/myList/Mylist.vue'
	import fun from '@/mix/fun/index.js'
	
	export default {
		components: {
			myCard,
			myList,
			myTag,
			uniPopupDialog
		},
		mixins: [ fun ],
		data() {
			return {
				money: '', // 记账金额
				payAll: 200, // 支出统计总金额
				income: 200000000, // 收入统计金额
				tags: [],
				payList: [
					{ tags: ['信息项1', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 300 },
					{ tags: ['信息项2', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: -200 },
					{ tags: ['信息项3', '信息项', '信息项', '信息项', '信息项'], time: '2020.10.10 13:13:13', number: 400 }
				], // 支出内容
				incomeList: [], // 收入内容
				tagTypeIndex: -1 // 标签类型索引
			}
		},
		onShow() {
			// 重置金额
			this.money = ''
		},
		methods: {
			// 记账功能
			record() {
				if (this.money === '' || isNaN(+this.money)) {
					uni.showToast({
						title: '请输入数字！',
						icon: 'none'
					})
					return false
				}
				const money = +this.money
				uni.navigateTo({
					url: '/pages/record/index?money=' + money
				})
			},
			// 跳转到详情页面
			goDetail(type) {
				uni.navigateTo({
					url: '/pages/detail/index'
				})
			},
			// 添加标签弹窗
			addTag(index) {
				this.$refs.addTagPopup.open()
				this.tagTypeIndex = index
			},
			close(done) {
				done()
				this.tagTypeIndex = -1
			},
			confirm(done, val) {
				done()
				if (this.tagTypeIndex === -1 || !val) return false
				// this.tags.push(val)
				const apiArr = ['payTags/addTag', 'incomeTags/addTag']
				const account = this.$store.getters['user/account']
				const data = {
					tid: account + Date.now(),
					owner: account,
					content: val
				}
				this.$store.dispatch(apiArr[this.tagTypeIndex], data).then(res => {
					uni.showToast({
						title: '添加成功！',
						icon: 'none'
					})
				})
			},
			// 退出登录
			logout() {
				const account = this.$store.getters['user/account']
				this.$store.dispatch('user/logout', { account }).then(res => {
					uni.showToast({
						title: '退出成功！',
						icon: 'none'
					})
					uni.reLaunch({
						url: '/pages/login/index'
					})
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
		min-height: 100vh;
		padding: 30rpx 0;

		// 记账 开始
		.card-book-keeping-content {
			display: flex;
			align-items: center;
			padding: 10rpx;
			
			.input-number {
				width: 70%;
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
			font-size: 20rpx;
			background-color: #fcd217;
			color: #000;
			margin-bottom: 10rpx;
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
		
		// 记账弹窗 开始
		.form {
			width: 100%;
			
			.recordInfo {
				padding: 20rpx;
				border-top: 5rpx solid #333;
				border-bottom: 5rpx solid #333;
			}
		}
		// 记账弹窗 结束
		
		// 暂无问本样式
		.textNone {
			font-size: 30rpx;
			font-weight: 700;
			color: rgba(51, 51, 51, .3);
			flex: 1;
			text-align: center;
		}
		
		// 退出登录 开始
		.logoutBox {
			margin-top: 30rpx;
			width: 80%;
			
			button {
				background-color: #f0ad4e;
				color: #EEE;
			}
		}
		// 退出登录 结束
	}
</style>
