# Form (表单)
##### 多个item的组合，和FormItem组件以及FormGroup组件配合使用
###### 目前处于测试版本
---
## 示例
### 简单使用
FormItem组件通过label属性指定label
```html
<kw-form>
  <kw-form-item label="用户名">
    <kw-input placeholder="请输入用户名"></kw-input>
  </kw-form-item>
  <kw-form-item label="密码">
    <kw-input type="password" placeholder="请输入密码"></kw-input>
  </kw-form-item>
</kw-form>
```
### 设置label宽度
Form组件和FormItem组件label-width指定label宽度
```html
<kw-form label-width="70">
  <kw-form-item label="用户名">
    <kw-input placeholder="请输入用户名"></kw-input>
  </kw-form-item>
  <kw-form-item label="密码">
    <kw-input placeholder="请输入密码"></kw-input>
  </kw-form-item>
  <kw-form-item label="确认密码">
    <kw-input placeholder="请再次输入密码"></kw-input>
  </kw-form-item>
</kw-form>
```
### label文字对齐方式
当label字数不统一时，可以使右侧的表单控件对齐。同时可以指定label的对齐方式，label-align默认为left，其他两个取值为center和right
```html
<kw-form label-width="70" label-align="right">
  <kw-form-item label="用户名">
    <kw-input placeholder="请输入用户名"></kw-input>
  </kw-form-item>
  <kw-form-item label="密码">
    <kw-input placeholder="请输入密码"></kw-input>
  </kw-form-item>
  <kw-form-item label="确认密码">
    <kw-input placeholder="请再次输入密码"></kw-input>
  </kw-form-item>
</kw-form>
```
### label字体颜色
Form组件和FormItem组价均可使用label-color定义label的颜色，FormItem优先级高于Form，值可以是官方内设的颜色值，也可以是合法的任何css颜色值。默认值为#333。
```html
<kw-form label-color="success">
  <kw-form-item label="姓名">
    <kw-input placeholder="请输入姓名"></kw-input>
  </kw-form-item>
  <kw-form-item label="密码" label-color="danger">
    <kw-input placeholder="请输入密码"></kw-input>
  </kw-form-item>
  <kw-form-item label="性别" label-color="info">
    <kw-radio-group>
      <kw-radio>男</kw-radio>
      <kw-radio>女</kw-radio>
    </kw-radio-group>
  </kw-form-item>
</kw-form>
```
### 表单分组
FormGroup组件可以对表单进行分组
```html
<kw-form>
  <kw-form-group>
    <kw-form-item label="姓名">
      <kw-input placeholder="请输入姓名"></kw-input>
    </kw-form-item>
    <kw-form-item label="密码">
      <kw-input placeholder="请输入密码"></kw-input>
    </kw-form-item>
  </kw-form-group>

  <kw-form-group>
    <kw-form-item label="地址">
      <kw-input placeholder="请输入地址"></kw-input>
    </kw-form-item>
    <kw-form-item label="电话">
      <kw-input placeholder="请输入电话"></kw-input>
    </kw-form-item>
  </kw-form-group>
</kw-form>
```
### 堆叠样式的label
label-type设置为stack时，可以显示一个堆叠的label。样式表现为label在上，表单控件在下。该属性在Form组件和FormItem组件上均可使用，FormItem优先级高于Form。label-type有两种取值：inline、stack，默认为inline或者不写。
```html
<kw-form label-type="stack">
  <kw-form-item label="姓名">
    <kw-input placeholder="请输入姓名"></kw-input>
  </kw-form-item>
  <kw-form-item label="密码">
    <kw-input placeholder="请输入密码"></kw-input>
  </kw-form-item>
</kw-form>
```
### 表单控件显示在一行
添加inline属性，可以让表单控件显示在一行，每个控件均分宽度。适用于填写座机号码时分开填写区号和号码的情况，或者填写姓名时分开填写姓和名的情况等等。
```html
<kw-form label-width="60">
  <kw-form-item label="姓名" inline>
    <kw-input placeholder="请输入姓"></kw-input>
    <kw-input placeholder="请输入名"></kw-input>
  </kw-form-item>
  <kw-form-item label="座机号码" inline>
    <kw-input placeholder="请输入区号"></kw-input>
    <kw-input placeholder="请输入号码"></kw-input>
  </kw-form-item>
</kw-form>
```
## API
### Form
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
label-width|label宽度|string,number|-|-
label-color|label文字颜色|string|官方内置颜色字符串，或所有css合法的颜色值|#333
label-type|label位置，默认label和表单控件在一行。可以设置stack使得两者位于两行|string|inline(或者不写),stack|inline
label-align|label文字的对齐方式|string|left,center,right|left
### FormItem
#### Props
名称|描述|类型|可选值|默认值
---|---|---|---|---
label|label文字|string|-|-
label-width|label宽度|string,number|-|-
label-color|label文字颜色|string|官方内置颜色字符串，或所有css合法的颜色值|#333
label-type|label位置，默认label和表单控件在一行。可以设置stack使得两者位于两行|string|inline(或者不写),stack|inline
label-align|label文字的对齐方式|string|left,center,right|left
is-link|右侧会显示一个箭头，表示此项可以点击|boolean|true,false|false
hide-label|是否隐藏label|boolean|true,false|false
no-border|是否不显示border|boolean|true,false|false
inline|表单控件是否在同一行显示|boolean|true,false|false
#### Slots
名称|描述
---|---
default|default
label|label
