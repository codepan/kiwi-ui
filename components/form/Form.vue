<template>
  <div class="kw-form">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'kwForm',
    data () {
      return {
      }
    },
    props: {
      labelWidth: {
        type: [String, Number],
        default: ''
      },
      labelColor: String,
      labelType: String,
      labelAlign: String
    }
  }
</script>
