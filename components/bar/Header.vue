<template>
  <kw-bar
    type="header"
    :fixed="fixed"
    :title="title"
    :color="color"
    :bg-color="bgColor"
    :height="height"
    :top="top">
    <template slot="left">
      <slot name="left"></slot>
    </template>
    <slot>{{title}}</slot>
    <template slot="right">
      <slot name="right"></slot>
    </template>
  </kw-bar>
</template>

<script>
  import Bar from './Bar'
  export default {
    name: 'kwHeader',
    extends: Bar,
    props: {
      fixed: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
