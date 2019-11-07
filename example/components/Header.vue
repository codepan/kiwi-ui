<template>
  <header class="doc-header" :style="headerStyle">
    <a class="logo-wrapper">
      <div class="icon-wrapper" v-if="isMobile" @click.stop="toggleSidenav">
        <ul class="menu-list">
          <li class="menu-item"></li>
          <li class="menu-item"></li>
          <li class="menu-item"></li>
        </ul>
      </div>
      <h1 class="boss">kiwi-ui</h1>
      <div class="logo">kiwi-ui</div>
    </a>
    <nav class="nav">
      <ul class="list">
        <li class="item" @click="viewDocument">文档</li>
        <li class="item" @click="viewPreview">在线示例</li>
        <li class="item">移动端查看</li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { isMobile } from '../common/utils'
import bus from '~example/common/bus'
export default {
  data () {
    return {
      isMobile: isMobile()
    }
  },
  computed: {
    headerStyle () {
      return this.isMobile ? {
        padding: '0 10px'
      } : {
        padding: '0 60px'
      }
    }
  },
  methods: {
    viewDocument () {
      window.location.href = window.location.origin
    },
    viewPreview () {
      window.open(this.getPreviewSrc(), '_blank')
    },
    getPreviewSrc () {
      const { href, host, origin, pathname } = window.location
      if (href.includes('index.html')) {
        return `${href.split('index.html')[0]}/preview.html`
      }
      if (host.includes('codepan.cc')) {
        return origin + pathname + `preview.html`
      }

      return `${origin}/preview.html`
    },
    toggleSidenav () {
      bus.update('toggleSidenav', bus.toggleSidenav = !bus.toggleSidenav)
    }
  }
}
</script>
<style lang="scss">
.doc-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: #001938;
  color: #bbb;
  .logo-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .boss {
      position: absolute;
      top: -1000px;
    }
    .logo {
      font-size: 30px;
      font-weight: bold;
    }
    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 100%;
      margin-right: 10px;
      .menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        .menu-item {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 2px;
          background: #bbb;
          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .nav {
    .list {
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0;
      padding: 0;
      .item {
        margin: 0;
        padding: 0;
        list-style: none;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>