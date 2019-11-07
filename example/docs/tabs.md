# Tabs（选项卡）
##### 选项卡用来显示多页内容
###### 支持顶部和底部两种位置，并且支持滑动切换
---
## 示例
### 默认Tabs
默认Tabs显示在底部，背景色为灰色，激活的tab色为primary。配合Tab组件使用，title属性即为Tab按钮文字
```html
<kw-tabs>
  <kw-tab title="Props">
    <p>属性</p>
    <p>属性</p>
    <p>属性</p>
  </kw-tab>
  <kw-tab title="Slots">
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
  </kw-tab>
  <kw-tab title="Events">
    <p>事件</p>
    <p>事件</p>
    <p>事件</p>
  </kw-tab>
</kw-tabs>
```
### 顶部Tabs
position属性用来确定选项卡tab的位置，有top和bottom两种取值，默认为bottom
```html
<kw-tabs position="top">
  <kw-tab title="Props">
    <p>属性</p>
    <p>属性</p>
    <p>属性</p>
  </kw-tab>
  <kw-tab title="Slots">
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
  </kw-tab>
  <kw-tab title="Events">
    <p>事件</p>
    <p>事件</p>
    <p>事件</p>
  </kw-tab>
</kw-tabs>
```
### 可滑动的且含有条纹的Tabs
slidable属性添加滑动功能，stripe属性添加条纹
```html
<kw-tabs position="top" slidable stripe>
  <kw-tab title="Props">
    <p>属性</p>
    <p>属性</p>
    <p>属性</p>
  </kw-tab>
  <kw-tab title="Slots">
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
  </kw-tab>
  <kw-tab title="Events">
    <p>事件</p>
    <p>事件</p>
    <p>事件</p>
  </kw-tab>
</kw-tabs>
```
### 设置背景色、文字颜色以及激活的文字&条纹颜色
bg-color属性设置背景色，color属性设置文字颜色，active-color属性指定被激活的颜色，三者取值均参见Color组件设置相应的值。当然，你也可以传入颜色的单词或者rgb来精确满足你的色彩要求。
```html
<kw-tabs position="top" slidable stripe bg-color="success" color="light" active-color="danger">
  <kw-tab title="Props">
    <p>属性</p>
    <p>属性</p>
    <p>属性</p>
  </kw-tab>
  <kw-tab title="Slots">
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
  </kw-tab>
  <kw-tab title="Events">
    <p>事件</p>
    <p>事件</p>
    <p>事件</p>
  </kw-tab>
</kw-tabs>
```
### 添加图标
Tabs组件含有icon-position属性，作用为设置icon的位置，其有top,right,bottom,left四种取值，默认为top。Tab组件含有icon属性，通过该属性可以为Tab指定icon
```html
<kw-tabs>
  <kw-tab title="关闭" icon="close">
    <p>属性</p>
    <p>属性</p>
    <p>属性</p>
  </kw-tab>
  <kw-tab title="查询" icon="search">
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
  </kw-tab>
  <kw-tab title="我的" icon="user">
    <p>事件</p>
    <p>事件</p>
    <p>事件</p>
  </kw-tab>
</kw-tabs>
```
### ButtonGroup样式的Tab
Tab默认为文字或者图标或者文字图标样式。可以设置type属性等于button，将其变为ButtonGroup风格的样式
```html
<kw-tabs type="button">
  <kw-tab title="关闭" icon="close">
    <p>属性</p>
    <p>属性</p>
    <p>属性</p>
  </kw-tab>
  <kw-tab title="查询" icon="search">
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
  </kw-tab>
  <kw-tab title="我的" icon="user">
    <p>事件</p>
    <p>事件</p>
    <p>事件</p>
  </kw-tab>
</kw-tabs>
```
### 通过Slot自定义icon或title
Tab组件有两个具名Slot，分别是icon和title，各自可以指定icon和title。当icon属性和icon Slot同时存在时，icon Slot会覆盖icon属性。title亦然。
```html
<kw-tabs>
  <kw-tab title="关闭" icon="close">
    
    <p>属性</p>
    <p>属性</p>
    <p>属性</p>
  </kw-tab>
  <kw-tab title="查询" icon="search">
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
    <p>卡槽</p>
  </kw-tab>
  <kw-tab title="我的" icon="user">
    <p>事件</p>
    <p>事件</p>
    <p>事件</p>
  </kw-tab>
</kw-tabs>
```
## API
### Tabs
#### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
active|默认激活的Tab,取值为子组件Tab组件的value属性值|string,number|-|0
position|Tab的位置|string|top,bottom|bottom
stripe|Tab是否有条纹|boolean|true,false|false
slidable|是否可以滑动切换|boolean|true,false|false
height|Tabs组件的高度|string,number|可以为百分比，例如90%,100%；也可以是数值，单位为px|默认高度为内容自身的高度
fixed|是否固定Tab。当position属性为top时，Tab固定在页面顶部；当position属性为bottom时，Tab固定在页面底部，Tab container占满屏幕剩余部分。|boolean|true,false|false
color|Tab文字颜色|string|参见Color组件，或传入合法的css的颜色值|#515a6e
active-color|激活的Tab文字颜色|string|参见Color组件，或传入合法的css的颜色值|primary
bg-color|Tab的背景颜色|string|参见Color组件，或传入合法的css的颜色值|#f8f8f8
icon-position|Tab icon的位置，仅当Tab组件有icon时该属性才起作用|string|top,right,bottom,left|top
type|Tab的样式，只有一个button取值，以ButtonGroup组件的样式显示。并且此时bg-color属性和stripe属性将失效|string|button|-
icon-size|图标的尺寸|string,number|取值参见Icon组件的size属性|-
font-size|文字的尺寸|string,number|取值可以是small,large两个关键字，其中small=12px,large=16px。也可以传入代表字体大小的数字|-
linksClass|自定义links的Class|string|-|-
linkClass|自定义link的Class|string|-|-
containerClass|自定义container的Class，container为内容区域|string|-|-
activeClass|自定义被激活的link的Class|string|-|-
#### Events
名称|描述|参数
---|---|---
tab-active|当某个Tab签被激活时触发|当前被激活的Tab实例，有value,title,index三个属性
### Tab
#### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
value|Tab的值，该值将作为父组件Tabs组件active值的唯一对应|string,number|-|-
title|Tab签上的文字|string|-|-
icon|icon图标|string|参见Icon组件|-
#### Slots
名称|描述
---|---
default|Tab的内容
icon|Tab的图标
title|Tab的标题
