<template>
  <div class="doc-wrapper">
    <doc-header></doc-header>
    <doc-main></doc-main>
  </div>
</template>
<script>
import docHeader from '../components/Header'
import docMain from '../components/Main'
export default {
  components: {
    docHeader,
    docMain
  }
}
</script>
<style lang="scss">
</style>