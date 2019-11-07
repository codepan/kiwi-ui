# Badge (角标)
##### 角标用于提醒用户
###### 功能丰富
---
## 示例
### 角标颜色
通过设置color来改变角标颜色。颜色参见Color组件，不设置默认颜色为红色。
```html
<kw-badge>2</kw-badge>
<kw-badge color="primary">2</kw-badge>
<kw-badge color="stable">12</kw-badge>
<kw-badge color="success">128</kw-badge>
```
### 角标宽度
通过设置width属性来改变角标宽度，例如width="100"。如果没有单位，则默认为px（像素）
```html
<kw-badge width="100">100px</kw-badge>
```
### 角标类型
角标类型有：fill，outline。通过设置type为outline将角标设置为仅含边框，默认为fill。
```html
<kw-badge type="fill">3</kw-badge>
<kw-badge type="outline">3</kw-badge>
```
### 圆形角标
设置circle属性为true，角标将一直以圆形显示
```html
<kw-badge circle>4</kw-badge>
<kw-badge circle>44</kw-badge>
<kw-badge circle>444</kw-badge>
```
### 角标尺寸
角标尺寸有：小、默认（中）、大。通过设置size为small、不写、large将按钮设置为小、中、大的尺寸，不设置为默认（中）尺寸。 
```html
<kw-badge size="small">10</kw-badge>
<kw-badge>10</kw-badge>
<kw-badge size="large">10</kw-badge>
```
## API
### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
color|颜色|string|参见Color组件|-
size|开关的尺寸|string|small/default(或者不写)/large|-
type|类型|string|outline/fill|fill
circle|总是以圆形显示|boolean|true/false|false
### Slots
名称|描述
---|---
-|显示的内容
