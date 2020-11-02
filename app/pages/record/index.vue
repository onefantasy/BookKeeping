<template>
	<view class="record bc">
		<!-- 金额 开始 -->
		<view class="recordItem money flex">
			<text>金额：</text>
			<input type="text" placeholder="请输入金额" v-model="money" class="input" />
			<text>元</text>
		</view>
		<!-- 金额 结束 -->
		<!-- 流动 开始 -->
		<view class="recordItem flex">
			<text>流动：</text>
			<text>{{ flow }}</text>
		</view>
		<!-- 流动 结束 -->
		<!-- 标签选择 开始 -->
		<view class="recordItem">
			<text>标签:</text>
			<view v-if="selectTags[0]" class="tags">
				<my-tag 
					v-for="(item, index) in selectTags" 
					:key="index + item" 
					:tagContent="item.content" 
					:isWhite="tags.indexOf(item) < 0 ? true : false"
					@click.native="selectTag(item)"
				></my-tag>
			</view>
			<view v-else class="tags textNone">
				暂无标签
			</view>
		</view>
		<!-- 标签选择 结束 -->
		<!-- 日期选择器 开始 -->
		<view class="recordItem flex">
			<text>日期：</text>
			<picker mode="date" :value="date" @change="bindDateChange" class="picker">
			    <view>{{ date }}</view>
			</picker>
		</view>
		<!-- 日期选择器 结束 -->
		<!-- 时间选择器 开始 -->
		<view class="recordItem flex">
			<text>时间：</text>
			<picker mode="time" :value="time" @change="bindTimeChange" class="picker">
			    <view>{{ time }}</view>
			</picker>
		</view>
		<!-- 时间选择器 结束 -->
		<!-- 备注 开始 -->
		<view class="recordItem flex">
			<text>备注：</text>
			<textarea placeholder="请输入备注信息" :auto-height="true" v-model="info" :maxlength="-1" class="textarea"/>
		</view>
		<!-- 备注 结束 -->
		<!-- 保存按钮 开始 -->
		<button type="default" class="save iconfont" @click="save">&#xe865; 保存</button>
		<!-- 保存按钮 结束 -->
	</view>
</template>

<script>
	import myTag from '@/components/myTag/MyTag.vue'
	
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	
	function getTime() {
		const date = new Date()
		
		let hour = date.getHours()
		let min = date.getMinutes()
		
		hour = hour > 9 ? hour : '0' + hour
		min = min > 9 ? min : '0' + min
		return `${hour}:${min}`
	}
	
	export default {
		components: {
			myTag
		},
		data() {
			return {
				// 金额
				money: 0,
				// 标签列表
				tags: [],
				// 可选的标签
				selectTags: [],
				// 日期
				date: getDate(),
				// 时间
				time: getTime(),
				// 备注
				info: '',
				// 资金流动
				flow: ''
			}
		},
		watch: {
			'money'() {
				const flag = this.money < 0
				this.flow = flag ? '支出' : '收入'
				this.tags = []
				this.selectTags = flag ? this.$store.getters['tags/payTags'] : this.$store.getters['tags/incomeTags']
			}
		},
		onLoad(e) {
			this.money = e.money || 0
			const keys = Object.keys(e)
			for (let key of keys) {
				if (key === 'tags') {
					this[key] = e[key].split(',')
					continue
				}
				this[key] = e[key]
			}
		},
		methods: {
			// 选择标签
			selectTag(tag) {
				const index = this.tags.indexOf(tag)
				if (index < 0) {
					this.tags.push(tag)
				} else {
					this.tags.splice(index, 1)
				}
			},
			// 选择日期
			bindDateChange(e) {
				this.date = e.target.value
			},
			// 选择时间
			bindTimeChange(e) {
				this.time = e.target.value
			},
			// 保存
			save() {
				if (this.money === '' || isNaN(+this.money)) {
					this.money = '请输入数字！'
					setTimeout(() => {
						this.money = ''
					}, 1000)
					return false
				}
				const data = {
					rid: this.$store.getters['user/account'] + Date.now(),
					money: this.money,
					flow: this.flow,
					date: this.date,
					time: this.time,
					tags: this.tags.map(item => item.content).join(','),
					info: this.info,
					account: this.$store.getters['user/account']
				}
				this.$store.dispatch('records/save', data).then(res => {
					uni.navigateBack()
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.record {
		min-height: 100vh;
		padding: 20rpx;
		font-size: 36rpx;
		color: #666;
		
		.flex {
			display: flex;
		}
		
		.recordItem {
			margin: 10rpx 0;
		}
		
		.money {
			line-height: 50rpx;
			height: 50rpx;
			
			input {
				text-align: center;
				border-bottom: 5rpx solid #999;
			}
		}
		
		.tags {
			display: flex;
			margin-top: 10rpx;
			border: 5rpx solid #666;
			border-radius: 10rpx;
			flex-wrap: wrap;
		}
		
		.picker {
			flex: 1;
			text-align: center;
			border-bottom: 5rpx solid #999;
		}
		
		.input {
			font-size: 36rpx;
		}
		
		.textarea {
			flex: 1;
			border-bottom: 5rpx solid #999;
			font-size: 36rpx;
		}
		
		.save {
			background-color: #fcd217;
			color: #fff;
		}
		
		// 暂无问本样式
		.textNone {
			display: block;
			font-size: 30rpx;
			font-weight: 700;
			color: rgba(51, 51, 51, .3);
			text-align: center;
			width: 100%;
		}
	}
</style>
