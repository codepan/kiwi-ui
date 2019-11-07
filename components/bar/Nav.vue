<template>
  <kw-bar
    type="nav"
    :fixed="fixed"
    :title="title"
    :color="color"
    :bg-color="bgColor"
    :height="height"
    :top="top"
    :back-text="backText"
    :back="back">
    <template slot="left">
      <slot name="left"></slot>
      <slot name="back"></slot>
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
    name: 'kwNav',
    extends: Bar,
    props: {
      fixed: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
