(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{84:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this.$createElement;this._self._c;return this._m(0)};function e(s,t,a){return(e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(s){return!1}}()?Reflect.construct:function(s,t,a){var r=[null];r.push.apply(r,t);var e=new(Function.bind.apply(s,r));return a&&v(e,a.prototype),e}).apply(null,arguments)}function v(s,t){return(v=Object.setPrototypeOf||function(s,t){return s.__proto__=t,s})(s,t)}function _(s){return function(s){if(Array.isArray(s)){for(var t=0,a=new Array(s.length);t<s.length;t++)a[t]=s[t];return a}}(s)||function(s){if(Symbol.iterator in Object(s)||"[object Arguments]"===Object.prototype.toString.call(s))return Array.from(s)}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r._withStripped=!0;var l={data:function(){return{visible:!1}},methods:{handleConfirm:function(s){var t=s.values;this.$dialog({title:"选择的日期为：",message:e(Date,_(t)).toString()})}}},n=a(0),p=Object(n.a)(l,r,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("DatetimePicker")]),s._v(" "),a("h5",[s._v("日期时间选择器")]),s._v(" "),a("h6",[s._v("支持自定义格式")]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("简单使用")]),s._v(" "),a("p",[s._v("使用v-model绑定boolean值来控制组件的的打开与关闭，组件默认会显示年月日时分。选择完毕点击“确定”，触发confirm事件，回调参数有两个：")]),s._v(" "),a("ul",[a("li",[s._v("未指定format属性时：\n"),a("ul",[a("li",[s._v("第一个参数与Picker组件相同")]),s._v(" "),a("li",[s._v("第二个参数默为当前选择的日期对象")])])]),s._v(" "),a("li",[s._v("指定了format属性时：\n"),a("ul",[a("li",[s._v("第一个参数为被格式化后的日期字符串")]),s._v(" "),a("li",[s._v("第二个参数与Picker组件相同")])])])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleConfirm"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }),\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleConfirm ({ values }) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选择的日期为：'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("(...values).toString()\n        })\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("不同的显示类型")]),s._v(" "),a("p",[s._v("通过type属性指定类型，可选值有："),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("datetime")]),s._v("、"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("date")]),s._v("、"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("time")]),s._v("，默认为"),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("datetime")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"date"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleConfirm1"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleConfirm2"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    })\n    methods: {\n      handleConfirm1 ({ texts }) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog.alert(texts.join("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'-'")]),s._v("), "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选择的日期为：'")]),s._v(")\n      },\n      handleConfirm2 ({ texts }) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog.alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${texts["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]}")]),s._v("点"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${texts["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]}")]),s._v("分`")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选择的时间为：'")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("格式化结果值")]),s._v(" "),a("p",[s._v("默认的结果值为Date对象，可以通过format属性指定格式化字符串，形如：'yyyy-MM-dd hh:mm'或'yyyy/MM/dd'等")]),s._v(" "),a("p",[s._v("当指定了format属性时，confirm事件回调参数的第一个参数为根据format格式化后的日期字符串")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yyyy-MM-dd hh:mm"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleConfirm"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yyyy年MM月dd日"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleConfirm"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    })\n    methods: {\n      handleConfirm (dateString) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog.alert(dateString, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'选择的时间为：'")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("限定显示范围")]),s._v(" "),a("p",[s._v("年份默认的范围为当前年份的前后10年，其他没有限定。需要时可以通过min-year和max-year来限定年份")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min-year")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2016"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max-year")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2020"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    })\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("默认选中")]),s._v(" "),a("p",[s._v("通过select属性可以指定默认选中，可以是数组，也可以是具有日期格式的字符串，还可以是一个日期对象")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"select1"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"select2"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"select3"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible3")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("select1")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2013")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("9")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("select2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2013-9-21 4:30'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("select3")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2013")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(")\n    })\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("美化显示")]),s._v(" "),a("p",[s._v("format属性用来格式化选择后的结果值，而format-*属性则用来格式化显示文本，其不会对结果值造成影响，只是显示上的一种美化而已。")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format-year")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yyyy年"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format-month")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"MM月"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format-date")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dd日"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format-hour")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hh时"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format-minute")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mm分"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-datetime-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    })\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("h3",[s._v("Props")]),s._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("通过type属性指定日期时间类型")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("datetime")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("date")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("time")])]),s._v(" "),a("td",[s._v("datetime")])]),s._v(" "),a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("设置默认选中")]),s._v(" "),a("td",[s._v("String/Array/Date")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("new Date()")])]),s._v(" "),a("tr",[a("td",[s._v("format-year")]),s._v(" "),a("td",[s._v("格式化年")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("yyyy")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("yyyy年")]),s._v(" 等")]),s._v(" "),a("td",[s._v("yyyy")])]),s._v(" "),a("tr",[a("td",[s._v("format-month")]),s._v(" "),a("td",[s._v("格式化月")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("MM")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("MM月")]),s._v(" 等")]),s._v(" "),a("td",[s._v("MM")])]),s._v(" "),a("tr",[a("td",[s._v("format-date")]),s._v(" "),a("td",[s._v("格式化日")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("dd")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("dd日")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("dd号")]),s._v(" 等")]),s._v(" "),a("td",[s._v("dd")])]),s._v(" "),a("tr",[a("td",[s._v("format-hour")]),s._v(" "),a("td",[s._v("格式化小时")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("hh")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("hh时")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("hh点")]),s._v(" 等")]),s._v(" "),a("td",[s._v("hh")])]),s._v(" "),a("tr",[a("td",[s._v("format-minute")]),s._v(" "),a("td",[s._v("格式化分钟")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("mm")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("mm分")]),s._v(" 等")]),s._v(" "),a("td",[s._v("mm")])]),s._v(" "),a("tr",[a("td",[s._v("format")]),s._v(" "),a("td",[s._v("格式化选择后的结果值，格式必须形如：'yyyy-MM-dd hh:mm'")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Date对象")])]),s._v(" "),a("tr",[a("td",[s._v("min-year")]),s._v(" "),a("td",[s._v("最小年份")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("10年前")])]),s._v(" "),a("tr",[a("td",[s._v("max-year")]),s._v(" "),a("td",[s._v("最大年份")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("10年后")])]),s._v(" "),a("tr",[a("td",[s._v("min-month")]),s._v(" "),a("td",[s._v("最小月份")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("[1-12]")]),s._v(" "),a("td",[s._v("1")])]),s._v(" "),a("tr",[a("td",[s._v("max-month")]),s._v(" "),a("td",[s._v("最大月份")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("[1-12]")]),s._v(" "),a("td",[s._v("12")])]),s._v(" "),a("tr",[a("td",[s._v("min-date")]),s._v(" "),a("td",[s._v("最小日期")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("[1-31]")]),s._v(" "),a("td",[s._v("1")])]),s._v(" "),a("tr",[a("td",[s._v("max-date")]),s._v(" "),a("td",[s._v("最大日期")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("[1-31]")]),s._v(" "),a("td",[s._v("每月最后一天")])]),s._v(" "),a("tr",[a("td",[s._v("hide-year")]),s._v(" "),a("td",[s._v("是否隐藏年份")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("true")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("false")])]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("hide-minute")]),s._v(" "),a("td",[s._v("是否隐藏分钟")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("true")]),s._v(" "),a("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("false")])]),s._v(" "),a("td",[s._v("false")])])])]),s._v(" "),a("h3",[s._v("Events")]),s._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("cancel")]),s._v(" "),a("td",[s._v("点击取消按钮时触发")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("confirm")]),s._v(" "),a("td",[s._v("点击确定按钮时触发")]),s._v(" "),a("td",[s._v("详见上文描述")])]),s._v(" "),a("tr",[a("td",[s._v("change")]),s._v(" "),a("td",[s._v("日期变化时触发")]),s._v(" "),a("td",[s._v("参见Picker组件")])])])])])}],!1,null,null,null);p.options.__file="example/docs/datetime-picker.md";t.default=p.exports}}]);