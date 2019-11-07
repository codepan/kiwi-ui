<template>
  <div class="kw-button-group" :class="{'kw-button-group-round': shape === 'round'}" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'kwButtonGroup',
    props: {
      shape: {
        type: String, // radius default
        default: 'default'
      },
      color: {
        type: String,
        default: 'light'
      },
      size: String,
      highlight: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        activeButtonIndex: -1
      }
    },
    methods: {
      setButtonClass () {
        let buttonSlots = this.$slots.default.filter(slot => {
          return slot.tag
        })

        buttonSlots.map((buttonSlot, index) => {
          buttonSlot.componentInstance.buttonColorClass = this.color
          buttonSlot.componentInstance.buttonSizeClass = this.size

          if (this.highlight) {
            buttonSlot.componentInstance.$el.addEventListener('click', () => {
              this.activeButtonIndex = index
              buttonSlots.forEach((buttonSlot, index) => {
                buttonSlot.componentInstance.isHighlight = this.activeButtonIndex === index
              })
            })
          }
        })
      },
      handleClick () {
        this.$emit('click', this.activeButtonIndex)
      }
    },
    mounted () {
      this.setButtonClass()
    }
  }
</script>

<style lang="scss">
  .kw-button-group{
    display: inline-flex;
    height:100%;
    border: 1px solid $color-stable;
    box-sizing: border-box;
    border-radius: 2px;
    overflow: hidden;
    &.kw-button-group-round{
      border-radius: 25px;
    }
    .kw-button{
      flex: 1;
      border:none;
      outline: none;
      border-radius: 0;
      margin: 0; /* 消除ios中按钮之间有外边距的问题 */
      &:not(:last-child){
        border-right: 1px solid $color-stable;
      }
    }
  }
</style>
