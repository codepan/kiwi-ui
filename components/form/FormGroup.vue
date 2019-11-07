<template>
  <div class="kw-form-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'kwFormGroup',
    data () {
      return {
      }
    },
    props: {
    }
  }
</script>

<style lang="scss">
  .kw-form{
    .kw-form-group{
      margin: 10px 0;
    }
  }
</style>
