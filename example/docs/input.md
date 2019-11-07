# Input (输入框)
##### 基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用
###### 功能丰富 定制性强
---
## 示例
### input 类型
input 类型有：text(文本)、password(密码)、search(搜索)、integer(整数-包括负整数，正整数)、number(数字-包括整数和小数。小数保留两位有效数字)。通过type属性设置不同类型的输入框，默认为text。
```html
<kw-input placeholder="type=text"></kw-input>
<kw-input type="password" placeholder="type=password" clearable></kw-input>
<kw-input type="search" placeholder="type=search"></kw-input>
<kw-input type="integer" placeholder="type=integer"></kw-input>
<kw-input type="number" placeholder="type=number"></kw-input>
```
### 带单位的input
通过指定unit属性，来显示一个带unit单位的input，单位过长时超出的会被省略
```html
<kw-input placeholder="输入框带单位元" unit="元"></kw-input>
<kw-input placeholder="输入框带单位千克" unit="千克"></kw-input>
<kw-input placeholder="单位太长超出的会被省略" unit="单位太长超出的会被省略"></kw-input>
```
### 带有icon的input
通过指定icon属性，来为input添加icon，默认加在左边。你还可以通过icon-position属性，设置值为right，将icon显示在右侧。icon的取值请查阅Icon组件
```html
<kw-input placeholder="icon=user，icon-position默认为left" icon="user" maxlength="10"></kw-input>
<kw-input icon="password" icon-position="right" placeholder="icon=password，icon-position设置为right" ></kw-input>
```
### 只读或禁用
只读和禁用的相同之处是：1.只能查看不能输入或修改；2.不会弹出键盘。区别在于两个方面：1.外观 禁用为灰色背景；2.事件 只读时可以绑定事件，禁用时所有事件失效。
```html
<kw-input placeholder="只读" readonly></kw-input>
<kw-input placeholder="禁用" disabled></kw-input>
```
### 文本域
可以通过rows属性指定行数，默认为1。rows应为大于0的整数
```html
<kw-input type="textarea" placeholder="默认显示一行"></kw-input>
<kw-input type="textarea" rows="4" placeholder="通过rows属性指定行数，rows=4"></kw-input>
```
### 自适应文本高度的文本域
设置属性 autosize，文本域会自动适应高度的变化。autosize也可以设定为一个对象，指定最小行数和最大行数
```html
<kw-input type="textarea" :autosize="true" placeholder="自适应高度"></kw-input>
<kw-input type="textarea" :autosize="{minRows: 3, maxRows: 5}" placeholder="自适应高度，但最小3行，最大5行"></kw-input>
```
## API
### Props
名称 |描述|类型|可选值|默认值
---|---|---|---|---
type||类型|string|text,password,integer,number,email,url,tel,date,datetime,search,textarea|text
value|输入框的值|string,number|-|-
placeholder|占位文本|string|-|-
maxlength|输入框文本最大字符数|number|-|-
icon|图标|string|、user,password等，具体参见Icon组件|-
icon-position|icon位置，仅在含有icon时有效|string|left,right|left
unit|右侧添加单位,值即为单位|string|-|-
clearable|添加清除按钮，点击可以快速删除输入框文本|boolean|true,false|false
no-border|是否没有边框|boolean|true,false|false
readonly|是否只读|boolean|true,false|false
disabled|是否禁用文本框|boolean|true,false|false
toggle-visible|是否对密码做明文与密文之间的动态切换，UI表现为右侧会有一个小眼睛。该属性仅对type="password"的文本框有效|boolean|true,false|false
rows|文本域默认行数，仅在 textarea 类型下有效|number|-|1
autosize|自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }|boolean,object|true,false,object|false
### Events
名称|描述|参数
---|---|---
input|输入内容时触发|输入的内容
click|输入框被点击时触发|输入的内容
search|用户点击了手机键盘的搜索键时触发，该事件只在type=search类型的输入框时有效|输入的内容

