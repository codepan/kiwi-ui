<template>
  <figure class="kw-grid-item" :style="style" @click="$emit('click')">
    <div class="kw-grid-item-icon" v-if="hasIcon">
      <slot name="icon">
        <kw-icon :icon="icon"></kw-icon>
      </slot>
    </div>
    <slot></slot>
  </figure>
</template>

<script>
  export default {
    name: 'kwGridItem',
    props: {
      icon: String,
      align: {
        type: String,
        default: 'center'
      }
    },
    computed: {
      hasIcon () {
        return this.$slots.icon || this.icon
      },
      style () {
        let style = {}
        let alignItems
        if (this.align === 'left') {
          alignItems = 'flex-start'
        } else if (this.align === 'right') {
          alignItems = 'flex-end'
        } else {
          alignItems = 'center'
        }

        style.alignItems = alignItems

        return style
      }
    }
  }
</script>
