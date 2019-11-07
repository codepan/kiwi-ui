<template>
  <kw-layout>
    <kw-nav>Icon 图标</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-icon icon="close"></kw-icon>
        <kw-icon icon="search" size="large"></kw-icon>
        <kw-icon icon="close-fill" size="small"></kw-icon>
        <kw-icon icon="exit" color="info"></kw-icon>
      </demo-block>
      <demo-block title="图标库">
        <kw-input placeholder="输入关键字搜索图标" v-model="keyword" type="search" @keydown.native="show = false" @keyup.native="show = true"></kw-input>
        <kw-grid v-if="show" has-border>
          <kw-grid-item v-for="(icon, $index) in newIcons" :key="$index">
            <kw-icon slot="icon" :icon="icon"></kw-icon>
            <span class="icon-name">{{icon}}</span>
          </kw-grid-item>
        </kw-grid>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  import icons from '~preview/assets/configs/icons'
  export default {
    data () {
      return {
        keyword: '',
        show: true
      }
    },
    computed: {
      newIcons () {
        return icons.filter(icon => {
          return icon.includes(this.keyword)
        })
      }
    }
  }
</script>

<style lang="scss">
  .kw-grid-item{
    text-align: center;
    .icon-name{
      user-select: all !important;
    }
  }
</style>
