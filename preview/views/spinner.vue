<template>
  <kw-layout>
    <kw-nav>Spinner 加载器</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-spinner></kw-spinner>
      </demo-block>
      <demo-block title="加载器的大小">
        <kw-spinner size="mini"></kw-spinner>
        <kw-spinner size="small"></kw-spinner>
        <kw-spinner></kw-spinner>
        <kw-spinner size="large"></kw-spinner>
      </demo-block>
       <demo-block title="加载器的类型">
         <kw-grid :cols="2">
           <kw-grid-item>
             <kw-spinner type="snow" slot="icon"></kw-spinner>
             snow
           </kw-grid-item>
           <kw-grid-item>
             <kw-spinner type="snake" slot="icon"></kw-spinner>
             snake
           </kw-grid-item>
           <kw-grid-item>
             <kw-spinner type="ring-circle" slot="icon"></kw-spinner>
             ring-circle
           </kw-grid-item>
           <kw-grid-item>
             <kw-spinner type="triple-bounce" slot="icon" size=mini></kw-spinner>
             triple-bounce
           </kw-grid-item>
         </kw-grid>
      </demo-block>
      <demo-block title="加载器的颜色">
        <kw-spinner size="mini" color="success"></kw-spinner>
        <kw-spinner type="ring-circle" size="large" color="info"></kw-spinner>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>