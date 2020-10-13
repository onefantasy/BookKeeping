<template>
 <view>
  <view class="tagBox yellow" :class="{ green: colorIndex % 3 === 1, blue: colorIndex % 3 === 2 }" @click="openPopup">
   <text>{{ tagContent }}</text>
  </view>
  <uni-popup ref="popup" type="dialog">
   <uni-popup-dialog type="warn" mode="base" :content="`是否删除标签[${tagContent}]?`" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
  </uni-popup>
 </view>
</template>

<script>
 import uniPopup from '../uni-popup/popup.js'
 import uniPopupDialog from '../uni-popup/uni-popup-dialog.vue'
 
 export default {
  name: 'my-tag',
  props: {
   // 标签文字
   tagContent: {
    type: String,
    default: '无'
   },
   // 颜色索引
   colorIndex: {
    type: Number,
    default: 0
   },
   // 点击方法是否打开
   isOpen: {
	   type: Boolean,
	   default: false
   }
  },
  components: {
	uniPopupDialog
  },
  data() {
   return {}
  },
  methods: {
   // 打开对话框
   openPopup() {
	if (!this.isOpen) return false
    this.$refs.popup.open()
   },
   // 关闭
   close() {
    this.$refs.popup.close()
   },
   // 确认
   confirm() {
    console.log('确认删除这种标签！')
    this.$refs.popup.close()
   }
  }
 }
</script>

<style scoped lang="scss">
 .tagBox {
  background-color: #E6A23C;
  color: #fff;
  text-align: center;
  height: 25rpx;
  line-height: 25rpx;
  font-size: 25rpx;
  padding: 15rpx;
  border-radius: 10rpx;
  margin: 10rpx;
 }
 .yellow {
  background-color: #E6A23C;
 }
 .green {
  background-color: #00CE47;
 }
 .blue {
  background-color: #1989FA;
 }
</style>
