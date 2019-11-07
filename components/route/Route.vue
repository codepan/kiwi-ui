<template>
  <section class="kw-route-wrapper">
    <div class="route-name">
      <slot name="from">
        {{from}}
      </slot>
    </div>
    <div class="route-arrow">
      <slot name="icon">
        <kw-icon icon="route-swap" v-if="double"></kw-icon>
        <kw-icon icon="route-left" v-else></kw-icon>
      </slot>
    </div>
    <div class="route-name">
      <slot name="to">
        {{to}}
      </slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'kwRoute',
    props: {
      from: String,
      to: String,
      double: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .kw-route-wrapper{
    display: flex;
    align-items: center;
    .route-name{
      max-width: 46%;
      word-break: break-all;
      font-size: 16px;
    }
    .route-arrow{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 6px;
      margin: 0 6px;
    }
  }
</style>
