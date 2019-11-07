# Timeline (时间轴)
##### 时间轴多用于某项任务进度的展示，例如：物流、订单进度等
###### 功能强大
---
## 示例
### 基本用法
最简单定义一个时间轴的用法
```html
<kw-timeline>
  <kw-timeline-item>
    <div>商家已接单，准备出库</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已出库，准备递交给快递</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已到达北京，准备派送</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已被百米站代收</div>
  </kw-timeline-item>
</kw-timeline>
```
### 圆点颜色
用各种颜色来标识不同状态，取值参见Color组件或自定义的颜色，默认是primary。可以在Timeline组件上使用dot-color统一设置，也可以在TimelineItem组件上单个设置
```html
<kw-timeline dot-color="success">
  <kw-timeline-item>
    <div>商家已接单，准备出库</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已出库，准备递交给快递</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已到达北京，准备派送</div>
  </kw-timeline-item>
  <kw-timeline-item dot-color="danger">
    <div>收件人电话无法接通，宝贝已被百米站代收</div>
  </kw-timeline-item>
</kw-timeline>
```
### 圆点类型
有实心圆和空心圆两种类型，默认为空心圆，通过dot-type设置，取值有fill(实心),outline(实线空心),dotted(虚线空心)默认为outline
```html
<kw-timeline dot-type="fill">
  <kw-timeline-item>
    <div>商家已接单，准备出库</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已出库，准备递交给快递</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已到达北京，准备派送</div>
  </kw-timeline-item>
  <kw-timeline-item dot-type="outline" dot-color="danger">
    <div>收件人电话无法接通，宝贝已被百米站代收</div>
  </kw-timeline-item>
</kw-timeline>
```
### 圆点尺寸
通过dot-size设置小点尺寸，可选值有small,large
```html
<kw-timeline dot-size="large">
  <kw-timeline-item>
    <div>商家已接单，准备出库</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <div>宝贝已出库，准备递交给快递</div>
  </kw-timeline-item>
  <kw-timeline-item line-color="danger" line-type="dotted">
    <div>宝贝已到达北京，准备派送</div>
  </kw-timeline-item>
  <kw-timeline-item dot-type="dotted" dot-color="danger">
    <div>收件人电话无法接通，宝贝已被百米站代收</div>
  </kw-timeline-item>
</kw-timeline>
```
### 竖线颜色
竖线颜色的区分常用在表示进度时间轴的场景中，执行完的一种颜色，待办的一种颜色。line-color可选值和dot-color相同，默认为stable。竖线还有其他个性化配置，详见下方API。
```html
<kw-timeline line-color="danger" line-type="dotted">
  <kw-timeline-item>
    <time slot="time">10-27 20:00</time>
    <p>商家已接单，准备出库</p>
  </kw-timeline-item>
  <kw-timeline-item>
    <time slot="time">10-28 16:00</time>
    <p>宝贝已出库，准备递交给快递</p>
  </kw-timeline-item>
  <kw-timeline-item>
    <time slot="time">10-29 08:00</time>
    <p>宝贝已到达北京，准备派送</p>
  </kw-timeline-item>
  <kw-timeline-item>
    <time slot="time">10-29 12:00</time>
    <p>收件人电话无法接通，宝贝已被百米站代收</p>
  </kw-timeline-item>
</kw-timeline>
```
### 时间位于左侧
time-position设置为left，时间将在左侧显示，仅当存在名为time的slot时，该属性才会有效。
```html
<kw-timeline time-position="left">
  <kw-timeline-item>
    <time slot="time">10-27</time>
    <div>商家已接单，准备出库</div>
    <div slot="note">接单人：周先生</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <time slot="time">10-28</time>
    <div>宝贝已出库，准备递交给快递</div>
    <div slot="note">快递公司：顺丰</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <time slot="time">10-29</time>
    <div>宝贝已到达北京，准备派送</div>
  </kw-timeline-item>
  <kw-timeline-item>
    <time slot="time">10-29</time>
    <div>收件人电话无法接通，宝贝已被百米站代收</div>
    <div slot="note">百米站联系电话：13344236575</div>
  </kw-timeline-item>
</kw-timeline>
```
## API
### Timeline
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
dot-color|圆点颜色|string|参见Color组件|primary
dot-type|圆点类型|string|fill,outline,dotted|outline
dot-size|圆点尺寸|string|small,default(不写),large|default
line-color|竖线颜色|string|参见Color组件|primary
line-type|竖线类型，实线(solid)和虚线(dotted)|string|solid,dotted|solid
hide-line|是否隐藏竖线|boolean|true,false|false
time-position|时间显示的位置，有左侧和右侧两种|string|left,right|right
### TimelineItem
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
dot-color|圆点颜色|string|参见Color组件|primary
dot-type|圆点类型|string|fill,outline,dotted|outline
dot-size|圆点尺寸|string|small,default(不写),large|default
line-color|竖线颜色|string|参见Color组件|primary
line-type|竖线类型，实线(solid)和虚线(dotted)|string|solid,dotted|solid
#### Slots
名称|描述
---|---
time|时间
note|说明文字
-|内容

