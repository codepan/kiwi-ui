<template>
  <kw-layout>
    <kw-nav>Input 输入框</kw-nav>
    <kw-main has-nav>
      <demo-block title="input 类型">
        <kw-input placeholder="type=text"></kw-input>
        <br/>
        <kw-input type="password" placeholder="type=password" clearable></kw-input>
        <br/>
        <kw-input type="search" placeholder="type=search"></kw-input>
        <br/>
        <kw-input type="integer" placeholder="type=integer"></kw-input>
        <br/>
        <kw-input type="number" placeholder="type=number"></kw-input>
      </demo-block>
      <demo-block title="带单位的input">
        <kw-input placeholder="输入框带单位元" unit="元"></kw-input>
        <br/>
        <kw-input placeholder="输入框带单位千克" unit="千克"></kw-input>
        <br>
        <kw-input placeholder="单位太长超出的会被省略" unit="单位太长超出的会被省略"></kw-input>
      </demo-block>
      <demo-block title="带有icon的input">
        <kw-input placeholder="icon=user，icon-position默认为left" icon="user" maxlength="10"></kw-input>
        <br/>
        <kw-input icon="password" icon-position="right" placeholder="icon=password，icon-position设置为right" ></kw-input>
      </demo-block>
      <demo-block title="只读或禁用">
        <kw-input placeholder="只读" readonly></kw-input>
        <br>
        <kw-input placeholder="禁用" disabled></kw-input>
      </demo-block>
      <demo-block title="文本域">
        <kw-input type="textarea" placeholder="默认显示一行"></kw-input>
        <br>
        <kw-input type="textarea" rows="4" placeholder="通过rows属性指定行数，rows=4"></kw-input>
      </demo-block>
      <demo-block title="自适应文本高度的文本域">
        <kw-input type="textarea" :autosize="true" placeholder="自适应高度"></kw-input>
        <br>
        <kw-input type="textarea" :autosize="{minRows: 3, maxRows: 5}" placeholder="自适应高度，但最小3行，最大5行"></kw-input>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        message: 'ddddd'
      }
    }
  }
</script>
