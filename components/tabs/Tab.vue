<template>
  <section class="kw-tab">
    <slot></slot>
    <div ref="kwTabHtmlTitleRef">
      <slot name="title"></slot>
    </div>
    <div ref="kwTabHtmlIconRef">
      <slot name="icon"></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'kwTab',
    props: {
      value: {
        type: [String, Number]
      },
      title: {
        type: String
      },
      icon: String
    },
    methods: {
      getHtmlTitle () {
        let html = this.$refs.kwTabHtmlTitleRef.innerHTML
        this.$el.removeChild(this.$refs.kwTabHtmlTitleRef)
        return html
      },
      getHtmlIcon () {
        let html = this.$refs.kwTabHtmlIconRef.innerHTML
        this.$el.removeChild(this.$refs.kwTabHtmlIconRef)
        return html
      }
    }
  }
</script>
