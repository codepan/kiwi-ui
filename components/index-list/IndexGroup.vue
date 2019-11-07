<template>
  <section class="kw-index-group">
    <div class="kw-index-divider">
      <slot name="divider">{{divider}}</slot>
    </div>
    <ul class="kw-index-items">
      <slot></slot>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'kwIndexGroup',
    props: {
      divider: String
    },
    mounted () {
      let divider = this.divider
      if (!divider) {
        divider = this.$slots.divider[0].elm.innerText
      }
      this.$parent.$emit('groupRendered', divider)
    }
  }
</script>

<style lang="scss">
  .kw-index-group{
    .kw-index-divider{
      padding:5px 15px;
      background: $color-stable;
    }
    .kw-index-items{
      .kw-index-item {
        padding: 12px 15px;
        &:not(:last-child){
          border-bottom: 1px solid $item-border-color;
        }
      }
    }
  }
</style>
