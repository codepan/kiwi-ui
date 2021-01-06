<template>
  <main class="doc-main">
    <doc-nav v-if="!isMobile"></doc-nav>
    <doc-content class="content"></doc-content>
    <doc-preview :src="getPreviewSrc()" v-if="!isMobile"></doc-preview>
    <doc-sidenav v-if="isMobile && isShowSidenav"></doc-sidenav>
  </main>
</template>
<script>
import docNav from './nav'
import docSidenav from './Sidenav'
import docContent from './Content'
import docPreview from './Preview'

import bus from '~example/common/bus'
import { isMobile } from '../common/utils'
export default {
  data () {
    return {
      isMobile: isMobile()
    }
  },
  computed: {
    isShowSidenav: () => bus.toggleSidenav
  },
  components: {
    docNav,
    docSidenav,
    docContent,
    docPreview
  },
  methods: {
    getPreviewSrc () {
      const { href, host, origin, pathname } = window.location
      if (href.includes('index.html')) {
        return `${href.split('index.html')[0]}/preview.html#${this.$route.path}`
      }
      if (host.includes('codepan.top')) {
        return origin + pathname + `preview.html#${this.$route.path}`
      }

      return `${origin}/preview.html#${this.$route.path}`
    }
  }
}
</script>
<style lang="scss">
.doc-main {
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  overflow: hidden;
  // background: #f8f8f8;
  .content {
    flex: 1;
  }
}
</style>