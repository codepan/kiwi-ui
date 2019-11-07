# Spinner (加载器)
##### 加载器，用于比较耗时的操作时给与用户良好的反馈
###### 多种加载动画
---
## 示例
### 基本用法
默认显示的type为snow，大小为默认尺寸
```html
<kw-spinner></kw-spinner>
```
### 加载器的大小
通过size属性指定大小，取值有mini、small、large，或不写四种。
```html
<kw-spinner size="mini"></kw-spinner>
<kw-spinner size="small"></kw-spinner>
<kw-spinner></kw-spinner>
<kw-spinner size="large"></kw-spinner>
```
### 加载器的类型
不同风格的加载器
```html
<kw-spinner type="snow"></kw-spinner>
<kw-spinner type="snake"></kw-spinner>
<kw-spinner type="ring-circle"></kw-spinner>
<kw-spinner type="triple-bounce"></kw-spinner>
```
### 加载器的颜色
颜色值参见Color组件，默认为stable
```html
<kw-spinner size="mini" color="success"></kw-spinner>
<kw-spinner type="ring-circle" size="large" color="info"></kw-spinner>
```
# API
## Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
type|加载器的类型|string|`snow`<br/>`snake`<br/>`ring-circle`<br/>`triple-bounce`|snow
size|加载器的大小|string|`mini` `small` `default(或不写)` `large`|-
color|加载器的颜色|string|参见Color组件中的主色和辅助色|stable
