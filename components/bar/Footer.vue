<template>
  <kw-bar
    type="footer"
    :fixed="fixed"
    :color="color"
    :bg-color="bgColor"
    :bottom="bottom"
    :height="height">
    <slot></slot>
  </kw-bar>
</template>
<script>
  import Bar from './Bar'
  export default {
    name: 'kwFooter',
    extends: Bar,
    props: {
     fixed: {
       type: Boolean,
       default: true
     }
    }
  }
</script>
