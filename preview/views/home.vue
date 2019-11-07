<template>
  <kw-layout>
    <kw-header>kiwi-ui</kw-header>
    <kw-main has-header>
      <kw-list>
        <div v-for="(route, index) in navComponents" :key="index">
          <kw-item is-divider>{{route.title}}</kw-item>
          <kw-item v-for="(item, $index) in route.children" is-link :to="item.path" :key="$index">
            {{item.title}}
          </kw-item>
        </div>
      </kw-list>
    </kw-main>
  </kw-layout>
</template>
<script>
import navComponents from '~configs/nav-components.config.js'
export default {
  data: () => ({
    navComponents
  }),
  created () {
  }
}
</script>
<style lang="scss">

</style>