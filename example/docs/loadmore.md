# Loadmore (下拉刷新，上拉加载)
##### 移动端常见的分页查询方式
###### 定制能力强
---
## 示例
### 基本使用
组件具有两个事件：refresh和loadmore，前者为组件触发刷新动作时的事件，参数为组件实例；后者为组件触发加载更多动作时的事件，参数亦为组件实例。

当刷新数据完毕时，需要调用组件的refreshDone()方法，来结束组件的刷新动作；当加载更多数据完毕时，需要调用组件的loadmoreDone()方法，来结束组件的加载更多的动作。这两个方法尤为重要，务必记得手动调用。

使用组件时只有绑定了refresh或loadmore事件，组件才会有refresh或loadmore的功能。
```html
<template>
  <kw-loadmore @refresh="refresh" @loadmore="loadmore">
    <kw-list>
      <kw-item v-for="item in items" :key="item" title="item" :value="item"></kw-item>
    </kw-list>
  </kw-loadmore>
</template>

<script>
  export default {
    data () {
      return {
        refreshMode: {
          items: [],
          currentPage: 1,
          pageSize: 10
        },
        loadmoreMode: {
          items: [],
          currentPage: 1,
          pageSize: 10
        }
      }
    },
    computed: {
      items () {
        return [...this.refreshMode.items, ...this.loadmoreMode.items]
      }
    },
    methods: {
      loadmore ($loadmore) {
        window.setTimeout(() => {
          this.loadmoreData(++this.loadmoreMode.currentPage)
          $loadmore.loadmoreDone()
        }, 2000)
      },
      refresh ($loadmore) {
        window.setTimeout(() => {
          this.refreshData(this.refreshMode.currentPage++)
          $loadmore.refreshDone()
        }, 1000)
      },
      loadmoreData (currentPage = 1) {
        for (let i = this.loadmoreMode.items.length; i < currentPage * this.loadmoreMode.pageSize; i++) {
          this.loadmoreMode.items.push(i + 1)
        }
      },
      refreshData (currentPage = 1) {
        for (let i = this.refreshMode.items.length; i < currentPage * this.loadmoreMode.pageSize; i++) {
          this.refreshMode.items.unshift(-i)
        }
      }
    },
    created () {
      this.loadmoreData(1)
    }
  }
</script>
```

### 配置加载文字
组件刷新和加载更多的两个动作都具有以下状态：
* create 用户手指已经按下，完成下拉或者上拉动作，但是拉动的距离小于触发refresh或者loadmore两个事件的临界值，此时松手组件会恢复原位
* ready 下拉或者上拉的距离超过了触发事件的临界值，此时松手即会触发refresh或loadmore事件
* doing 该状态即为组件正在refresh或者正在loadmore时的状态
* done refreshDone()方法或loadmoreDone()方法被调用时，组件会变为该状态

以刷新为例，对应上面四种状态，可配置的文字属性依次为：refreshCreateText、refreshReadyText、refreshDoingText和refreshDoneText。那么加载更多配置对应的文字依次为：
loadmoreCreateText、loadmoreReadyText、loadmoreDoingText和loadmoreDoneText。
```html
<template>
  <kw-loadmore
   @refresh="refresh" 
   @loadmore="loadmore"
   refresh-create-text="下拉更精彩"
   refresh-ready-text="放开我"
   refresh-doing-text="精彩即将呈现">
    ...
  </kw-loadmore>
</template>

<script>
  export default {
    ...
  }
</script>
```
### 已全部加载
不断的加载更多数据，总有加载完的时候，或者想终止加载更多的功能时，可以通过all-loaded属性设置为true，组件则不会再触发loadmore事件。同时如果想给用户反馈已经是全部数据时，可以通过all-loaded-text属性指定显示的文案。
```html
<template>
  <kw-loadmore 
  @refresh="refresh" 
  @loadmore="loadmore" 
  :all-loaded="isAllLoaded" 
  all-loaded-text="我是有底线的">
    ...
  </kw-loadmore>
</template>

<script>
  export default {
    ...
  }
</script>
```

# API
### Props
名称|描述|类型|可选值|默认值
:---:|:---:|:---:|:---:|:---:
refresh-create-text|create状态时refresh的文字|string|-|下拉刷新
refresh-ready-text|ready状态时refresh的文字|string|-|松手刷新
refresh-doing-text|doing状态时refresh的文字|string|-|刷新中...
refresh-done-text|done状态时refresh的文字|string|-|刷新完毕
loadmore-create-text|create状态时loadmore的文字|string|-|上拉加载更多
loadmore-ready-text|ready状态时loadmore的文字|string|-|松手加载更多
loadmore-doing-text|doing状态时loadmore的文字|string|-|加载中...
loadmore-done-text|done状态时loadmore的文字|string|-|加载完毕
all-loaded|数据是否已全部加载完毕|boolean|`true` `false`|false
all-loaded-text|数据全部加载完毕时底部显示的文案|string|-|-
refresh-distance|触发refresh()方法的阈值，即组件下拉的移动距离，单位为px|number|-|70
loadmore-distance|触发loadmore()方法的阈值，即组件上拉的移动距离，单位为px|number|-|70
### Events
名称|描述|参数
---|---|---
refresh|刷新数据|组件实例
loadmore|加载更多|组件实例
#### Methods
名称|描述|参数
---|---|---
refreshDone|刷新数据完毕|-
loadmoreDone|加载更多完毕|-

