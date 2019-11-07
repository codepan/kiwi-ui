# Icon (图标)
##### 字体图标，使用方便，样式修改和普通字体一样
###### 图标丰富
---
## 示例
### 基本用法
通过icon属性指定图标，通过color属性设置颜色，通过size属性设置大小
```html
<kw-icon icon="close"></kw-icon>
<kw-icon icon="search" size="large"></kw-icon>
<kw-icon icon="close-fill" size="small"></kw-icon>
<kw-icon icon="exit" color="info"></kw-icon>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
icon|图标|string|参见右侧图标库|-
size|图标的尺寸|string|`small` `default(或者不写)` `large`|default
color|图标颜色|string|参见Color组件|-
