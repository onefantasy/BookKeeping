(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-index"],{"0145":function(t,n,i){"use strict";var s;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){return s}));var o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("v-uni-view",{staticClass:"box"},[s("v-uni-view",{staticClass:"iconBox bc"},[s("v-uni-image",{staticClass:"icon",attrs:{src:i("cddb"),mode:"aspectFit"}})],1),s("v-uni-view",{staticClass:"inputBox"},[s("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"账户"},model:{value:t.account,callback:function(n){t.account=n},expression:"account"}}),s("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"密码"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),s("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"确认密码"},model:{value:t.password2,callback:function(n){t.password2=n},expression:"password2"}})],1),s("v-uni-view",{staticClass:"buttons"},[s("v-uni-button",{staticClass:"login bc iconfont",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.register.apply(void 0,arguments)}}},[t._v(" 注册")])],1)],1)},e=[]},"347f":function(t,n,i){"use strict";i.r(n);var s=i("5151"),o=i.n(s);for(var e in s)"default"!==e&&function(t){i.d(n,t,(function(){return s[t]}))}(e);n["default"]=o.a},5151:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{account:"",password:"",password2:""}},methods:{register:function(){var t=this;if(!this.account||!this.password||!this.password2)return uni.showToast({title:"请先输入信息！",duration:2e3,icon:"none"}),!1;if(this.password!==this.password2)return uni.showToast({title:"两次输入密码不一样！",duration:2e3,icon:"none"}),!1;var n={account:this.account,password:this.password};this.$store.dispatch("user/register",n).then((function(n){uni.showToast({title:"注册成功！",duration:2e3}),t.resetInput(),setTimeout((function(){uni.navigateBack()}),1500)}))},resetInput:function(){this.account="",this.password="",this.password2=""}}};n.default=s},"53a3":function(t,n,i){"use strict";var s=i("5949"),o=i.n(s);o.a},5949:function(t,n,i){var s=i("bce0");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=i("4f06").default;o("3de8d600",s,!0,{sourceMap:!1,shadowMode:!1})},"66fb":function(t,n,i){"use strict";i.r(n);var s=i("0145"),o=i("347f");for(var e in o)"default"!==e&&function(t){i.d(n,t,(function(){return o[t]}))}(e);i("53a3");var a,r=i("f0c5"),c=Object(r["a"])(o["default"],s["b"],s["c"],!1,null,"44323990",null,!1,s["a"],a);n["default"]=c.exports},bce0:function(t,n,i){var s=i("24fb");n=s(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box .iconBox[data-v-44323990]{height:30vh;position:relative}.box .iconBox .icon[data-v-44323990]{width:%?150?%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.box .inputBox .input[data-v-44323990]{height:%?70?%;font-size:%?36?%;width:70%;margin:%?20?% auto;text-align:center;border-bottom:%?5?% solid #999}.box .buttons[data-v-44323990]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.box .buttons .login[data-v-44323990]{width:70%}.box .buttons .line[data-v-44323990]{color:#f79a17;font-size:%?25?%;text-decoration:underline;margin-top:%?20?%}',""]),t.exports=n},cddb:function(t,n,i){t.exports=i.p+"static/img/logo.022d91fc.png"}}]);