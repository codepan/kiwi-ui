<template>
  <kw-layout>
    <kw-nav>Form 表单</kw-nav>
    <kw-main has-nav>
      <demo-block title="简单使用">
        <kw-form>
          <kw-form-item label="用户名">
            <kw-input placeholder="请输入用户名"></kw-input>
          </kw-form-item>
          <kw-form-item label="密码">
            <kw-input type="password" placeholder="请输入密码"></kw-input>
          </kw-form-item>
        </kw-form>
      </demo-block>
      <demo-block title="设置label宽度">
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
      </demo-block>

      <demo-block title="label文字对齐方式">
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
      </demo-block>

      <demo-block title="label字体颜色">
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
      </demo-block>
      <demo-block title="表单分组">
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
      </demo-block>

      <demo-block title="堆叠样式的label">
        <kw-form label-type="stack">
          <kw-form-item label="姓名">
            <kw-input placeholder="请输入姓名"></kw-input>
          </kw-form-item>
          <kw-form-item label="密码">
            <kw-input placeholder="请输入密码"></kw-input>
          </kw-form-item>
        </kw-form>
      </demo-block>
      <demo-block title="表单控件显示在一行">
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
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
