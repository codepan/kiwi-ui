# Route (路线)
##### 路线组件具有一定的业务性质
###### 适用范围较小
---
## 示例
### 基本用法
from属性设置起点，to属性设置终点
```html
<kw-route from="上海" to="北京"></kw-route>
```
### 双向
double显示双向箭头
```html
<kw-route from="上海" to="北京" double></kw-route>
```
## API
### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
from|起点|string|-|-
to|终点|string|-|-
double|是否双向|boolean|true,false|false
### Slots
名称|描述
---|---
from|起点
to|终点
icon|图标

