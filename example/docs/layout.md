# Layout (布局)
##### 最外层包裹组件，其内部最主要可以包含Header组件、Subheader组件、Nav组件、Bar组件、Main组件和Footer六个组件
###### 容器宽高都为窗口的100%，最大宽度为750px，最小宽度为320px，居中显示，背景色为淡灰色（多数APP惯用的背景色）
---
## 示例
### layout布局
使用layout组件布局时需要注意应将`<kw-layout>`尽量作为`<body>`DOM的直接子元素，并且应将所有父元素（包括html和body）宽高均设为100%。单独使用此组件没有太大的意义，需要配合上述的几种布局组件才能发挥其作用
```html
<kw-layout>
  <kw-nav title="Layout 布局" color="success"></kw-nav>
  <kw-subheader title="这是子标题" color="stable"></kw-subheader>
  <kw-main has-subheader has-footer>
    <kw-list>
      <kw-item v-for="i in 20">
        {{i}}
      </kw-item>
    </kw-list>
  </kw-main>
  <kw-footer color="success">底部</kw-footer>
</kw-layout>
```

# API
## Props
名称|描述|类型|可选值|默认值
:---:|:---:|:---:|:---:|:---:
