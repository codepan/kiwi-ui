<template>
  <kw-layout>
    <kw-nav>Header 顶部栏</kw-nav>
    <kw-main has-header>
      <demo-block title="基本用法">
        <kw-bar title="title属性指定标题"></kw-bar><br/>
        <kw-bar>匿名Slot指定标题</kw-bar>
      </demo-block>
      <demo-block title="背景颜色与标题颜色">
        <kw-bar title="红色背景" bg-color="danger"></kw-bar>
        <br/>
        <kw-bar title="绿色背景" bg-color="success"></kw-bar>
        <br/>
        <kw-bar title="绿色标题" color="success"></kw-bar>
        <br/>
        <kw-bar title="白色标题绿色背景" bg-color="success" color="light"></kw-bar>
        <br/>
        <kw-bar title="白色标题黑色背景" bg-color="#333" color="light"></kw-bar>
      </demo-block>
      <demo-block title="左侧和右侧">
        <kw-bar title="标题文字">
          <kw-icon slot="left" icon="arrow-left"></kw-icon>
          <kw-icon slot="right" icon="menu"></kw-icon>
        </kw-bar>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
