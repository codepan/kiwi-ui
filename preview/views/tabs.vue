<template>
  <kw-layout>
    <kw-nav>Tabs 选项卡</kw-nav>
    <kw-main has-nav>
      <demo-block title="默认Tabs">
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
      </demo-block>
      <demo-block title="顶部Tabs">
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
      </demo-block>
      <demo-block title="可滑动的且含有条纹的Tabs">
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
      </demo-block>
      <demo-block title="设置背景色、文字颜色以及激活的文字&条纹颜色">
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
      </demo-block>
      <demo-block title="添加图标">
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
      </demo-block>
      <demo-block title="ButtonGroup样式的Tab">
        <kw-tabs type="button">
          <kw-tab :value="0" title="关闭" icon="close">
            <p>属性</p>
            <p>属性</p>
            <p>属性</p>
          </kw-tab>
          <kw-tab :value="1" title="查询" icon="search">
            <p>卡槽</p>
            <p>卡槽</p>
            <p>卡槽</p>
            <p>卡槽</p>
          </kw-tab>
          <kw-tab :value="2" title="我的" icon="user">
            <p>事件</p>
            <p>事件</p>
            <p>事件</p>
          </kw-tab>
        </kw-tabs>
      </demo-block>
      <demo-block title="通过Slot自定义icon或title">
        <kw-tabs bg-color="stable" active-color="yellow">
          <kw-tab>
            <span slot="title" style="font-style: oblique; color: #666;">关闭</span>
            <kw-icon slot="icon" icon="close" color="danger"></kw-icon>
            <p>属性</p>
            <p>属性</p>
            <p>属性</p>
          </kw-tab>
          <kw-tab>
            <span slot="title" style="font-style: oblique; color: #666;">查询</span>
            <kw-icon slot="icon" icon="search" color="success"></kw-icon>
            <p>卡槽</p>
            <p>卡槽</p>
            <p>卡槽</p>
            <p>卡槽</p>
          </kw-tab>
          <kw-tab title="" icon="">
            <span slot="title" style="font-style: oblique; color: #666;">我的</span>
            <kw-icon slot="icon" icon="user" color="lively"></kw-icon>
            <p>事件</p>
            <p>事件</p>
            <p>事件</p>
          </kw-tab>
        </kw-tabs>
      </demo-block>
      <demo-block title="fixed形式的Tabs">
        <kw-button @click="viewFixedTabs">fixed形式的Tabs</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    methods: {
      viewFixedTabs () {
        this.$router.push({
          name: 'example-tabs'
        })
      }
    }
  }
</script>
