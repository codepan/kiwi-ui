(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{86:function(e,c,t){"use strict";t.r(c);var l=function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("kw-layout",[t("kw-nav",[e._v("Checkbox 复选框")]),e._v(" "),t("kw-main",{attrs:{"has-nav":""}},[t("demo-block",{attrs:{title:"基本使用"}},[t("kw-checkbox",{model:{value:e.checked0,callback:function(c){e.checked0=c},expression:"checked0"}},[e._v("选项一")])],1),e._v(" "),t("demo-block",{attrs:{title:"禁用状态"}},[t("kw-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(c){e.checked1=c},expression:"checked1"}},[e._v("选项一")]),e._v(" "),t("kw-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(c){e.checked2=c},expression:"checked2"}},[e._v("选项二")])],1),e._v(" "),t("demo-block",{attrs:{title:"选中时颜色"}},[t("kw-checkbox",{attrs:{color:"success"},model:{value:e.checked3,callback:function(c){e.checked3=c},expression:"checked3"}},[e._v("选项一")]),e._v(" "),t("kw-checkbox",{attrs:{color:"info"},model:{value:e.checked4,callback:function(c){e.checked4=c},expression:"checked4"}},[e._v("选项二")])],1),e._v(" "),t("demo-block",{attrs:{title:"图标形状"}},[t("kw-checkbox",{attrs:{shape:"square"},model:{value:e.checked5,callback:function(c){e.checked5=c},expression:"checked5"}},[e._v("选项一")]),e._v(" "),t("kw-checkbox",{attrs:{shape:"square"},model:{value:e.checked6,callback:function(c){e.checked6=c},expression:"checked6"}},[e._v("选项二")])],1),e._v(" "),t("demo-block",{attrs:{title:"复选组"}},[t("kw-checkbox-group",{model:{value:e.result1,callback:function(c){e.result1=c},expression:"result1"}},e._l(e.list,function(c){return t("kw-checkbox",{key:c,attrs:{name:c}},[e._v("复选框 "+e._s(c))])}),1)],1),e._v(" "),t("demo-block",{attrs:{title:"列表样式"}},[t("kw-checkbox-group",{attrs:{list:""},model:{value:e.result2,callback:function(c){e.result2=c},expression:"result2"}},e._l(e.list,function(c){return t("kw-checkbox",{key:c,attrs:{name:c}},[e._v("复选框 "+e._s(c))])}),1)],1),e._v(" "),t("demo-block",{attrs:{title:"右对齐"}},[t("kw-checkbox-group",{attrs:{list:"",align:"right",max:2},model:{value:e.result3,callback:function(c){e.result3=c},expression:"result3"}},e._l(e.list,function(c){return t("kw-checkbox",{key:c,attrs:{name:c}},[e._v("复选框 "+e._s(c))])}),1)],1),e._v(" "),t("demo-block",{attrs:{title:"最大选择个数"}},[t("kw-checkbox-group",{attrs:{list:"",max:2},model:{value:e.result4,callback:function(c){e.result4=c},expression:"result4"}},e._l(e.list,function(c){return t("kw-checkbox",{key:c,attrs:{name:c}},[e._v("复选框 "+e._s(c))])}),1)],1)],1)],1)};l._withStripped=!0;var o={data:function(){return{checked0:!1,checked1:!1,checked2:!0,checked3:!0,checked4:!0,checked5:!1,checked6:!0,list:["A","B","C"],result1:["A","B"],result2:["A","B"],result3:["A"],result4:["A","B"]}},methods:{handleChange:function(e){this.$toast({position:"bottom",message:"您选择的值为 ".concat(e),duration:500})}}},s=t(0),a=Object(s.a)(o,l,[],!1,null,null,null);a.options.__file="preview/views/checkbox.vue";c.default=a.exports}}]);