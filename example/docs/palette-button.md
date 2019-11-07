# Button (按钮)
##### 按钮是移动app不可或缺的一部分，就像Header一样。不同风格的app，需要的不同按钮的样式。
###### 功能丰富 扩展性强
---
## 示例
### 按钮颜色
#### 按钮颜色有：默认、白色，灰色、蓝色、浅蓝色、绿色、黄色、红色、橙色、紫色。通过设置color为light、stable、primary、info、success、warning、danger、lively、royal创建不同颜色的按钮，不设置为默认样式。
```html
<kw-button>默认</kw-button>
<kw-button color="light">白色</kw-button>
<kw-button color="stable">灰色</kw-button>
<kw-button color="primary">蓝色</kw-button>
<kw-button color="info">信息</kw-button>
<kw-button color="success">成功</kw-button>
<kw-button color="warning">警告</kw-button>
<kw-button color="danger">危险</kw-button>
<kw-button color="lively">橙色</kw-button>
<kw-button color="royal">紫色</kw-button>
```
### 按钮尺寸
#### 按钮尺寸有：小、默认（中）、大、充满。通过设置size为small、large、full将按钮设置为小、大、充满父容器的尺寸，不设置为默认（中）尺寸。full尺寸的按钮一般用在Footer组件中。
```html
<kw-button size="small">small</kw-button>
<kw-button>default</kw-button>
<kw-button size="large">large</kw-button>
<kw-button color="lively" size="full">full</kw-button>
```
### 按钮类型
#### 按钮类型有：outline。通过设置type为outline将按钮设置为仅含边框，不设置为默认（有背景色）。
```html
<kw-button type="outline" color="primary">Outline</kw-button>
```
### 按钮形状
#### 按钮形状有：圆角、直角、圆形。通过设置shape为line或者circle将按钮设置为直角按钮或圆形按钮，不设置为默认（圆角）。
```html
<kw-button shape="line" color="primary">Line</kw-button>
<kw-button color="primary">Default</kw-button>
<kw-button shape="circle" color="primary">Circle</kw-button>
```
## API
### Props

名称 |描述|类型|可选值|默认值
-----|-------|---|-----|-----
color|颜色|string|light,stable,primary,info,success,warning,danger,lively,royal|-
size|尺寸|string|small,large,full|-
type|类型|string|outline|-
shape|形状|string|line,circle|-
### Events
名称|描述
---|------|
click|点击按钮时触发

