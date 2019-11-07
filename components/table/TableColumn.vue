<template>
  <div class="kw-table-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'kwTableColumn',
    props: {
      prop: {
        type: String
      },
      title: {
        type: String
      },
      width: {
        type: [Number, String]
      },
      nowrap: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
