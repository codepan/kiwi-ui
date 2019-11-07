<template>
  <component :is="who"></component>
</template>
<script>
  import loadmoreComp from './loadmore/loadmore.vue'
  import loadmoreTextComp from './loadmore/loadmore-text.vue'
  import loadmoreAllLoadedComp from './loadmore/loadmore-all-loaded.vue'
  export default {
    components: {
      loadmoreComp,
      loadmoreTextComp,
      loadmoreAllLoadedComp
    },
    computed: {
      who () {
        let name = this.$route.query.name
        switch (name) {
          case 'text':
            return 'loadmoreTextComp'
          case 'allLoaded':
            return 'loadmoreAllLoadedComp'
          default:
            return 'loadmoreComp'

        }
      }
    }
  }
</script>
