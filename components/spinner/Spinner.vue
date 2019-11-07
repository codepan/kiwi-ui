<template>
  <div class="kw-spinner" :class="[typeClass, sizeClass, colorClass]">
    <template v-if="type === 'snow'">
      <i class="item" v-for="i in 4" :key="i"></i>
    </template>
    <template v-if="type === 'triple-bounce'">
      <i class="item" v-for="i in 3" :key="i"></i>
    </template>
  </div>
</template>

<script>
  import {color} from '~src/utils'
  import types from './types'
  export default {
    name: 'kwSpinner',
    props: {
      type: {
        type: String,
        default: 'snow',
        validator: type => types.includes(type)
      },
      size: {
        type: String,
        default: 'default',
        validator (size) {
          return ['mini', 'small', 'default', 'large'].includes(size)
        }
      },
      color: {
        type: String,
        default: 'stable'
      }
    },
    computed: {
      sizeClass () {
        if (this.size === 'default') {
          return null
        }
        return `size-${this.size}`
      },
      colorClass () {
        return `color-${this.color}`
      },
      typeClass () {
        return `type-${this.type}`
      }
    }
  }
</script>

<style lang="scss">
  @import './mixins.scss';
  .kw-spinner {
    display: inline-flex;
    @include spinner-colors;
    @include spinner-types;
  }
</style>