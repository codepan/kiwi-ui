<template>
  <kw-layout>
    <kw-nav>Tabbar 导航条</kw-nav>
    <kw-main has-nav>
      <demo-block title="配合TabbarItem组件使用">
        <kw-tabbar>
          <kw-tabbar-item title="微信" icon="comment-outline">
          </kw-tabbar-item>
          <kw-tabbar-item title="通讯录">
            <kw-icon icon="address-book-outline" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item icon="compass-outline">
            <span slot="title">发现</span>
          </kw-tabbar-item>
          <kw-tabbar-item>
            <span slot="title">我</span>
            <kw-icon icon="user-outline" slot="icon"></kw-icon>
          </kw-tabbar-item>
        </kw-tabbar>
      </demo-block>
      <demo-block title="重要的items属性">
        <kw-tabbar :items="items"></kw-tabbar>
      </demo-block>
      <demo-block title="双向绑定被激活的Item">
        <kw-tabbar v-model="value">
          <kw-tabbar-item title="微信">
            <kw-icon :icon="value === 0 ? 'comment' : 'comment-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item title="通讯录">
            <kw-icon :icon="value === 1 ? 'address-book' : 'address-book-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item title="发现">
            <kw-icon :icon="value === 2 ? 'compass' : 'compass-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item title="我">
            <kw-icon :icon="value === 3 ? 'user' : 'user-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
        </kw-tabbar>
      </demo-block>
      <demo-block title="指定角标和圆点">
        <kw-tabbar v-model="value1">
          <kw-tabbar-item title="微信" badge="22">
            <kw-icon :icon="value1 === 0 ? 'comment' : 'comment-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item title="通讯录">
            <kw-badge slot="badge">1</kw-badge>
            <kw-icon :icon="value1 === 1 ? 'address-book' : 'address-book-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item title="发现" dot>
            <kw-icon :icon="value1 === 2 ? 'compass' : 'compass-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item title="我">
            <kw-icon :icon="value1 === 3 ? 'user' : 'user-outline'" slot="icon"></kw-icon>
          </kw-tabbar-item>
        </kw-tabbar>
      </demo-block>
      <demo-block title="控制图标显示的位置">
        <kw-tabbar icon-position="right">
          <kw-tabbar-item title="微信" icon="comment-outline">
          </kw-tabbar-item>
          <kw-tabbar-item title="通讯录">
            <kw-icon icon="address-book-outline" slot="icon"></kw-icon>
          </kw-tabbar-item>
          <kw-tabbar-item icon="compass-outline">
            <span slot="title">发现</span>
          </kw-tabbar-item>
          <kw-tabbar-item>
            <span slot="title">我</span>
            <kw-icon icon="user-outline" slot="icon"></kw-icon>
          </kw-tabbar-item>
        </kw-tabbar>
      </demo-block>
      <demo-block title="设置背景颜色和边框颜色">
        <kw-tabbar bg-color="stable" border-color="#bbb">
          <kw-tabbar-item title="微信" icon="comment-outline"></kw-tabbar-item>
          <kw-tabbar-item title="通讯录" icon="address-book-outline"></kw-tabbar-item>
          <kw-tabbar-item title="发现" icon="compass-outline"></kw-tabbar-item>
          <kw-tabbar-item title="我" icon="user-outline">
          </kw-tabbar-item>
        </kw-tabbar>
      </demo-block>
      <demo-block title="改变文字、图标的默认尺寸颜色以及被激活时的颜色">
        <kw-tabbar icon-size="30" font-size="16" active-color="lively">
          <kw-tabbar-item title="微信" icon="comment-outline"></kw-tabbar-item>
          <kw-tabbar-item title="通讯录" icon="address-book-outline"></kw-tabbar-item>
          <kw-tabbar-item title="发现" icon="compass-outline"></kw-tabbar-item>
          <kw-tabbar-item title="我" icon="user-outline">
          </kw-tabbar-item>
        </kw-tabbar>
      </demo-block>
      <demo-block title="容器尺寸的改变">
        <kw-tabbar padding="20">
          <kw-tabbar-item title="微信" icon="comment-outline"></kw-tabbar-item>
          <kw-tabbar-item title="通讯录" icon="address-book-outline"></kw-tabbar-item>
          <kw-tabbar-item title="发现" icon="compass-outline"></kw-tabbar-item>
          <kw-tabbar-item title="我" icon="user-outline">
          </kw-tabbar-item>
        </kw-tabbar>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        value: 0,
        value1: 0,
        items: [
          {
            title: '按钮',
            icon: 'comment',
            to: '/button'
          },
          {
            title: '色彩',
            icon: 'address-book',
            to: '/color'
          },
          {
            title: '时间轴',
            icon: 'compass',
            to: '/timeline'
          },
          {
            title: '图标',
            icon: 'user',
            to: '/icon'
          }
        ]
      }
    },
    methods: {
      viewFixedTabs () {
        this.$router.push({
          name: 'example-tabs'
        })
      }
    }
  }
</script>
