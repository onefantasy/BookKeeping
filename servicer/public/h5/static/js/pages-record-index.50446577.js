(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-index"],{"61c0":function(t,e,n){var a=n("859a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("796ad74a",a,!0,{sourceMap:!1,shadowMode:!1})},"859a":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.record[data-v-7c90e736]{min-height:100vh;padding:%?20?%;font-size:%?36?%;color:#666}.record .flex[data-v-7c90e736]{display:-webkit-box;display:-webkit-flex;display:flex}.record .recordItem[data-v-7c90e736]{margin:%?10?% 0}.record .money[data-v-7c90e736]{line-height:%?50?%;height:%?50?%}.record .money uni-input[data-v-7c90e736]{text-align:center;border-bottom:%?5?% solid #999}.record .tags[data-v-7c90e736]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?10?%;border:%?5?% solid #666;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.record .picker[data-v-7c90e736]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;border-bottom:%?5?% solid #999}.record .input[data-v-7c90e736]{font-size:%?36?%}.record .textarea[data-v-7c90e736]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-bottom:%?5?% solid #999;font-size:%?36?%}.record .save[data-v-7c90e736]{background-color:#fcd217;color:#fff}.record .textNone[data-v-7c90e736]{display:block;font-size:%?30?%;font-weight:700;color:rgba(51,51,51,.3);text-align:center;width:100%}',""]),t.exports=e},aa71:function(t,e,n){"use strict";n.r(e);var a=n("c705"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c705:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("c975"),n("a15b"),n("d81d"),n("a434"),n("b64b"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("e5a9"));function r(t){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(n,"-").concat(a,"-").concat(i)}function s(){var t=new Date,e=t.getHours(),n=t.getMinutes();return e=e>9?e:"0"+e,n=n>9?n:"0"+n,"".concat(e,":").concat(n)}var o={components:{myTag:i.default},data:function(){return{money:0,tags:[],selectTags:[],date:r(),time:s(),info:"",flow:""}},watch:{money:function(){var t=this.money<0;this.flow=t?"支出":"收入",this.tags=[],this.selectTags=t?this.$store.getters["tags/payTags"]:this.$store.getters["tags/incomeTags"]}},onLoad:function(t){this.money=t.money||0;for(var e=Object.keys(t),n=0,a=e;n<a.length;n++){var i=a[n];"tags"!==i?this[i]=t[i]:this[i]=t[i].split(",")}},methods:{selectTag:function(t){var e=this.tags.indexOf(t);e<0?this.tags.push(t):this.tags.splice(e,1)},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value},save:function(){var t=this;if(""===this.money||isNaN(+this.money))return this.money="请输入数字！",setTimeout((function(){t.money=""}),1e3),!1;var e={rid:this.$store.getters["user/account"]+Date.now(),money:this.money,flow:this.flow,date:this.date,time:this.time,tags:this.tags.map((function(t){return t.content})).join(","),info:this.info,account:this.$store.getters["user/account"]};this.$store.dispatch("record/save",e).then((function(t){uni.navigateBack(),uni.showToast({title:t.message,icon:"none"})}))}}};e.default=o},da80:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"record bc"},[n("v-uni-view",{staticClass:"recordItem money flex"},[n("v-uni-text",[t._v("金额：")]),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入金额"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),n("v-uni-text",[t._v("元")])],1),n("v-uni-view",{staticClass:"recordItem flex"},[n("v-uni-text",[t._v("流动：")]),n("v-uni-text",[t._v(t._s(t.flow))])],1),n("v-uni-view",{staticClass:"recordItem"},[n("v-uni-text",[t._v("标签:")]),t.selectTags[0]?n("v-uni-view",{staticClass:"tags"},t._l(t.selectTags,(function(e,a){return n("my-tag",{key:a+e,attrs:{tagContent:e.content,isWhite:t.tags.indexOf(e)<0},nativeOn:{click:function(n){return t.selectTag(e)}}})})),1):n("v-uni-view",{staticClass:"tags textNone"},[t._v("暂无标签")])],1),n("v-uni-view",{staticClass:"recordItem flex"},[n("v-uni-text",[t._v("日期：")]),n("v-uni-picker",{staticClass:"picker",attrs:{mode:"date",value:t.date},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[n("v-uni-view",[t._v(t._s(t.date))])],1)],1),n("v-uni-view",{staticClass:"recordItem flex"},[n("v-uni-text",[t._v("时间：")]),n("v-uni-picker",{staticClass:"picker",attrs:{mode:"time",value:t.time},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTimeChange.apply(void 0,arguments)}}},[n("v-uni-view",[t._v(t._s(t.time))])],1)],1),n("v-uni-view",{staticClass:"recordItem flex"},[n("v-uni-text",[t._v("备注：")]),n("v-uni-textarea",{staticClass:"textarea",attrs:{placeholder:"请输入备注信息","auto-height":!0,maxlength:-1},model:{value:t.info,callback:function(e){t.info=e},expression:"info"}})],1),n("v-uni-button",{staticClass:"save iconfont",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v(" 保存")])],1)},r=[]},e9e3:function(t,e,n){"use strict";n.r(e);var a=n("da80"),i=n("aa71");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("fb0b");var s,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"7c90e736",null,!1,a["a"],s);e["default"]=c.exports},fb0b:function(t,e,n){"use strict";var a=n("61c0"),i=n.n(a);i.a}}]);