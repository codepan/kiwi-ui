# IndexList（索引列表）
##### 常用于通讯录
###### 使用起来非常简单，无需关心排序，只需要逐条罗列子项即可。组件内部已经做了很多的逻辑处理
---
## 示例
### 基本用法
IndexList配合IndexItem组件使用，组件内部会根据IndexItem组件的文字内容按照首字母进行分组，并排序。英文直接处理，中文会转为拼音然后处理
```html
 <kw-index-list>
  <kw-index-item>阿苏</kw-index-item>
  <kw-index-item>阿康</kw-index-item>
  <kw-index-item>母夜叉</kw-index-item>
  <kw-index-item>孙二娘</kw-index-item>
  <kw-index-item>关胜</kw-index-item>
  <kw-index-item>吴用</kw-index-item>
  <kw-index-item>晁盖</kw-index-item>
  <kw-index-item>白胜</kw-index-item>
  <kw-index-item>武松</kw-index-item>
  <kw-index-item>林冲</kw-index-item>
  <kw-index-item>潘金莲</kw-index-item>
  <kw-index-item>张三</kw-index-item>
  <kw-index-item>李四</kw-index-item>
  <kw-index-item>王五</kw-index-item>
  <kw-index-item>赵六</kw-index-item>
  <kw-index-item>周明</kw-index-item>
  <kw-index-item>吴俊毅</kw-index-item>
  <kw-index-item>鲁智深</kw-index-item>
  <kw-index-item>李逵</kw-index-item>
  <kw-index-item>宋江</kw-index-item>
</kw-index-list>
```
### 快速检索
当手指在右侧导航中滑动时，会在页面中间显示一个目前索引值的提示符。若不需要提示符，只需将 show-indicator 设为 false
```html
 <kw-index-list>
  <kw-index-item>阿苏</kw-index-item>
  <kw-index-item>阿康</kw-index-item>
  <kw-index-item>母夜叉</kw-index-item>
  <kw-index-item>孙二娘</kw-index-item>
  <kw-index-item>关胜</kw-index-item>
  <kw-index-item>吴用</kw-index-item>
  <kw-index-item>晁盖</kw-index-item>
  <kw-index-item>白胜</kw-index-item>
  <kw-index-item>武松</kw-index-item>
  <kw-index-item>林冲</kw-index-item>
  <kw-index-item>潘金莲</kw-index-item>
  <kw-index-item>张三</kw-index-item>
  <kw-index-item>李四</kw-index-item>
  <kw-index-item>王五</kw-index-item>
  <kw-index-item>赵六</kw-index-item>
  <kw-index-item>周明</kw-index-item>
  <kw-index-item>吴俊毅</kw-index-item>
  <kw-index-item>鲁智深</kw-index-item>
  <kw-index-item>李逵</kw-index-item>
  <kw-index-item>宋江</kw-index-item>
</kw-index-list>
```
## API
### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
color|颜色|string|light,stable,primary,info,success,warning,danger,lively,royal|-
size|尺寸|string|small,large,full|-
type|类型|string|outline|-
shape|形状|string|line,circle|-
### Events
名称|描述
---|---
click|点击按钮时触发

