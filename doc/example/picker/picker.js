(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{135:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Picker（选择器）")]),s._v(" "),a("h5",[s._v("选择器多用来选择可枚举，或具有层级关系的数据")]),s._v(" "),a("h6",[s._v("支持多级联动")]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("默认Picker")]),s._v(" "),a("p",[s._v("slots属性是最重要的一个属性，其为一个二维数组，数组的第一维度代表有多少列，第二维度代表每列有哪些选项。")]),s._v(" "),a("p",[s._v("每个选项为一个对象，具有：text和value两个属性。text为显示的文字，value为选中后返回的值。选项也可以简单的配置为一个string或number，其同时代表了text和value。")]),s._v(" "),a("p",[s._v("当选择的选项变化时，会触发change事件，组件会向回调函数中注入三个参数，分别为：组件Picker的实例、发生滚动的滚轮所属组索引、发生滚动的滚轮所属组当前被选中的选项索引")]),s._v(" "),s._m(0),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("html",[a("head",[[a("p",{staticClass:"notice"},[s._v("您选择的季节为："+s._s(s.value))]),s._v(" "),a("kw-picker",{attrs:{slots:s.slots},on:{change:s.handleChange}})]],2),a("body")])]),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"notice"')]),s._v(">")]),s._v("您选择的季节为：{{value}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleChange"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":slots")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"slots"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slots")]),s._v(": [\n          [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'春'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'夏'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'秋'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'冬'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n            }\n          ]\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleChange (picker) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" texts = picker.getSelectedTexts()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = texts.join("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'---'")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("多级联动")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("html",[a("head",[[a("p",{staticClass:"notice"},[s._v("您选择的四大名著人物为："+s._s(s.value))]),s._v(" "),a("kw-picker",{attrs:{slots:s.slots},on:{change:s.handleChange}})]],2),a("body")])]),s._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"notice"')]),s._v(">")]),s._v("您选择的四大名著人物为：{{value}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-picker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleChange"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":slots")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"slots"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" cascadeSlotData = [\n    [\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'张飞'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'关羽'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'曹操'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'刘备'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }\n    ],\n    [\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'林冲'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'鲁智深'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'吴用'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'孙二娘'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }\n    ],\n    [\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'孙悟空'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'沙僧'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'猪八戒'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'唐僧'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'如来佛'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("\n      }\n    ],\n    [\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'林黛玉'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'贾宝玉'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'王熙凤'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n      },\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'夏金桂'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }\n    ]\n  ]\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slots")]),s._v(": [\n          [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'三国演义'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'水浒传'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'西游记'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'红楼梦'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n            }\n          ],\n          cascadeSlotData["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleChange (picker, slotIndex, slotSelectedIndex) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (slotIndex === "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n          picker.setSlot("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", cascadeSlotData[slotSelectedIndex])\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" texts = picker.getSelectedTexts()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = texts.join("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'---'")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("Popup形式")]),s._v(" "),a("p",[s._v("通过设置popup为true来开启该形式，popup为一个boolean值，默认为false")]),s._v(" "),a("p",[s._v("通过v-model绑定boolean值来打开或关闭Picker组件")]),s._v(" "),a("p",[s._v("点击”确定“按钮，会触发confirm事件，组件会向事件处理函数返回一个对象，对象包含三个属性，属性值均为数组：values为值value组成的数组；indexes为索引index组成的数组；texts为文字text组成的数组")]),s._v(" "),a("p",[s._v("此例还演示了选项也可以简单的配置为一个string或number，其同时代表了text和value。")]),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("h3",[s._v("Props")]),s._v(" "),s._m(4),s._v(" "),a("h4",[s._v("slots子配置项")]),s._v(" "),s._m(5),s._v(" "),a("h3",[s._v("Methods")]),s._v(" "),s._m(6),s._v(" "),a("h3",[s._v("Events")]),s._v(" "),s._m(7)],1)};r._withStripped=!0;var e={data:function(){return{value:"",slots:[[{text:"春",value:1},{text:"夏",value:2},{text:"秋",value:3},{text:"冬",value:4}]]}},methods:{handleChange:function(s){var t=s.getSelectedTexts();this.value=t.join("---")}}},v=a(0),_=Object(v.a)(e,r,[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("组件实例picker被注册了许多方法，供外部调用完成需求。如本例中的"),t("code",{pre:!0,attrs:{class:"code_inline"}},[this._v("getSelectedTexts()：获取所有slot目前被选中的文字")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("绑定change事件，change事件回调函数的第一个参数为Picker组件实例，可以调用其上的"),t("code",{pre:!0,attrs:{class:"code_inline"}},[this._v("setSlot(slotIndex, slot, isResetSelectedIndex)")]),this._v("方法来改变指定slot的数据")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("slotIndex：需要设置数据的slot索引")]),this._v(" "),t("li",[this._v("slot：数据")]),this._v(" "),t("li",[this._v("isResetSelectedIndex：是否重置之前选中的索引？默认为false，如果设置为true，则每次数据改变都会将选中的索引置为0")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible = true"')]),s._v(">")]),s._v("选择您的爱好"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-picker")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("popup")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@confirm")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleConfirm"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":slots")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"slots"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kw-picker")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slots")]),s._v(": [\n          ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'喝酒'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'抽烟'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'烫头'")]),s._v("]\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleConfirm ({ values, indexes, texts }) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog.alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`\n          <p>选择的value："),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${values.join("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'-'")]),s._v(")}")]),s._v("</p>\n          <p>选择的index："),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${indexes.join("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'-'")]),s._v(")}")]),s._v("</p>\n          <p>选择的text："),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${texts.join("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'-'")]),s._v(")}")]),s._v("</p>\n        `")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("slots")]),s._v(" "),a("td",[s._v("配置选择器滚轮数据的数组，其为一个二维数组，数组的第一维度代表有多少列，第二维度代表每列有哪些选项。每个选项为一个对象，具有：text和value两个属性。text为显示的文字，value为选中后返回的值。选项也可以简单的配置为一个string或number，其同时代表了text和value。")]),s._v(" "),a("td",[s._v("array")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("[]")])]),s._v(" "),a("tr",[a("td",[s._v("visual-count")]),s._v(" "),a("td",[s._v("可见的数量")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("大于0的正整数")]),s._v(" "),a("td",[s._v("当popup为true时，默认为9；反之为4")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("text")]),s._v(" "),a("td",[s._v("显示的文字")]),s._v(" "),a("td",[s._v("string/number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("选中后返回的值")]),s._v(" "),a("td",[s._v("string/number/boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("setSlot")]),s._v(" "),a("td",[s._v("设置指定slot的备选值数组")]),s._v(" "),a("td",[s._v("slotIndex：slot索引"),a("br"),s._v("slot：数据"),a("br"),s._v("?isResetSelectedIndex：是否重置被选中索引，默认false")])]),s._v(" "),a("tr",[a("td",[s._v("setSlots")]),s._v(" "),a("td",[s._v("slots属性的api版本，可以通过该方法设置slots")]),s._v(" "),a("td",[s._v("slots：数据")])]),s._v(" "),a("tr",[a("td",[s._v("setSlotSelectedValue")]),s._v(" "),a("td",[s._v("设置指定slot目前被选中的值")]),s._v(" "),a("td",[s._v("slotIndex：索引"),a("br"),s._v("selectedValue：被选中的值")])]),s._v(" "),a("tr",[a("td",[s._v("getSlotSelectedValue")]),s._v(" "),a("td",[s._v("获取指定slot目前被选中的值")]),s._v(" "),a("td",[s._v("slotIndex：索引")])]),s._v(" "),a("tr",[a("td",[s._v("setSlotSelectedIndex")]),s._v(" "),a("td",[s._v("设置指定slot目前被选中的索引")]),s._v(" "),a("td",[s._v("slotIndex：索引"),a("br"),s._v("selectedIndex：被选中的索引")])]),s._v(" "),a("tr",[a("td",[s._v("getSlotSelectedIndex")]),s._v(" "),a("td",[s._v("获取指定slot目前被选中的索引")]),s._v(" "),a("td",[s._v("slotIndex：索引")])]),s._v(" "),a("tr",[a("td",[s._v("setSlotSelectedText")]),s._v(" "),a("td",[s._v("设置指定slot目前被选中的文字")]),s._v(" "),a("td",[s._v("slotIndex：索引"),a("br"),s._v("selectedText：被选中的文字")])]),s._v(" "),a("tr",[a("td",[s._v("getSlotSelectedText")]),s._v(" "),a("td",[s._v("获取指定slot目前被选中的文字")]),s._v(" "),a("td",[s._v("slotIndex：索引")])]),s._v(" "),a("tr",[a("td",[s._v("setSelectedValues")]),s._v(" "),a("td",[s._v("设置所有slot目前被选中的值")]),s._v(" "),a("td",[s._v("values：值数组")])]),s._v(" "),a("tr",[a("td",[s._v("getSelectedValues")]),s._v(" "),a("td",[s._v("获取所有slot目前被选中的值")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("setSelectedIndexes")]),s._v(" "),a("td",[s._v("设置所有slot目前被选中的索引")]),s._v(" "),a("td",[s._v("indexes：索引数组")])]),s._v(" "),a("tr",[a("td",[s._v("getSelectedIndexes")]),s._v(" "),a("td",[s._v("获取所有slot目前被选中的索引")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("setSelectedTexts")]),s._v(" "),a("td",[s._v("设置所有slot目前被选中的文字")]),s._v(" "),a("td",[s._v("texts：文字数组")])]),s._v(" "),a("tr",[a("td",[s._v("getSelectedTexts")]),s._v(" "),a("td",[s._v("获取所有slot目前被选中的文字")]),s._v(" "),a("td",[s._v("-")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("confirm")]),s._v(" "),a("td",[s._v("点击确定按钮时触发")]),s._v(" "),a("td",[s._v("返回一个对象，包含三个属性："),a("br"),s._v("values为值数组；"),a("br"),s._v("indexes为索引数组；"),a("br"),s._v("texts为文本数组")])]),s._v(" "),a("tr",[a("td",[s._v("cancel")]),s._v(" "),a("td",[s._v("点击取消按钮时触发")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("change")]),s._v(" "),a("td",[s._v("被选中的值发生变化时触发")]),s._v(" "),a("td",[s._v("返回三个参数："),a("br"),s._v("第一个参数为Picker实例 picker；"),a("br"),s._v("第二个参数为发生滚动的滚轮所属组索引 slotIndex；"),a("br"),s._v("第三个参数为发生滚动的滚轮所属组当前被选中的选项索引 slotSelectedIndex")])])])])}],!1,null,null,null);_.options.__file="example/docs/picker.md";t.default=_.exports}}]);