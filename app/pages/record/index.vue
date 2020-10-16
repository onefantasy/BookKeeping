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
			<text>标签</text>
			<view class="tags">
				<my-tag 
					v-for="(item, index) in selectTags" 
					:key="index + item" 
					:tagContent="item" 
					:isWhite="tags.indexOf(item) < 0 ? true : false"
					@click.native="selectTag(item)"
				></my-tag>
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
		<button type="default" class="save" @click="save">保存</button>
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
				// 选中的标签
				selectTags: [
					'饮料',
					'共享电单车',
					'滴滴出行',
					'工资',
					'炒股利息',
					'全款购房',
					'中彩票',
					'小说收益'
				],
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
		// computed: {
		// 	flow() {
		// 		return this.money >= 0 ? '收入' : '支出'
		// 	}
		// },
		watch: {
			'money'() {
				this.flow = this.money < 0 ? '支出' : '收入'
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
					money: this.money,
					flow: this.flow,
					date: this.date,
					time: this.time,
					tags: this.tags,
					info: this.info
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.record {
		min-height: calc(100vh - 44px);
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
	}
</style>
