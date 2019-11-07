<template>
  <div class="doc-nav" :style="{background: bg}">
    <group :title="navGuide.title">
      <item v-for="route in navGuide.navigations" :view="route.path" :key="route.name">{{route.title}}</item>
    </group>
    <group :title="navComponents.title">
      <sub-group v-for="sub in navComponents.navigations" :title="sub.title" :key="sub.name">
        <item v-for="route in sub.children" :key="route.name" :view="route.path">{{route.title}}</item>
      </sub-group>
    </group>
  </div>
</template>

<script>
  import bus from '~example/common/bus'
  import group from './group'
  import subGroup from './sub-group'
  import item from './item'
  import navConfig from '~configs/nav.config'
  export default {
    data() {
      return {
        navConfig
      }
    },
    props: {
      bg: {
        type: String,
        default: '#fff'
      }
    },
    components: {
      group,
      subGroup,
      item
    },
    computed: {
      navGuide () {
        return this.navConfig.find(config => config.name === 'guide')
      },
      navComponents () {
        return this.navConfig.find(config => config.name === 'components')
      }
    }
  }
</script>

<style lang="scss">
  .doc-nav {
    overflow: auto;
  }
</style>
