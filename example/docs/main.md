# Main (主体)
##### 主体是除过Header、Subheader、Nav和Footer（若有）剩余的部分
###### 可以和Header、Subheader、Nav 、Footer方便的进行上中下布局
---
## 示例
### 默认Main
没有header和footer，将占满Layout组件
```html
<kw-main>主体内容</kw-main>
```
### 含有Header、Subheader、Nav或者Footer组件的Main
通过设置对应的has-xxx属性来控制Main组件的位置
```html
<kw-main has-nav has-subheader has-footer></kw-main>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
has-header|是否含有Header组件|boolean|true, false|false
has-nav|是否含有Nav组件|boolean|true, false|false
has-subheader|是否含有Subheader组件|boolean|true, false|false
has-footer|是否含有Footer组件|boolean|true, false|false
top|距离顶端的距离|string,number|数值或合法css属性值|-
bottom|距离顶部的距离|string,number|数值或合法css属性值|-
bg-color|背景色|string|Color组件内置颜色字符串或合法css属性值|#f8f8f8
