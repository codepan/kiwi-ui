<template>
  <section class="kw-rating-wrapper" :class="{'rating-text-bottom': textPosition === 'bottom'}">
    <div class="kw-rating-stars">
      <template v-for="num in count">
        <kw-icon v-if="num <= selectedCount" icon="star-fill" :color="starCheckedColor" :size="starSize" class="rating-star" @click="handleSelect(num)"></kw-icon>
        <kw-icon v-else icon="star" :color="starColor" :size="starSize" class="rating-star" @click="handleSelect(num)"></kw-icon>
      </template>
    </div>
    <div class="kw-rating-text" :class="textClass" v-if="selectedCount > 0 && showText" :style="textStyle">
      {{texts[selectedCount - 1]}}
    </div>
  </section>
</template>

<script>
  import {color} from '~src/utils/index'
  export default {
    name: 'kwRating',
    data () {
      return {
        selectedCount: 0
      }
    },
    props: {
      value: Number,
      count: {
        type: Number,
        default: 5
      },
      texts: {
        type: Array,
        default () {
          return ['极差', '差', '良', '好', '极好']
        }
      },
      textPosition: {
        type: String,
        default: 'right'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      starSize: [String, Number],
      showText: {
        type: Boolean,
        default: false
      },
      starColor: {
        type: String,
        default: 'primary'
      },
      starCheckedColor: {
        type: String,
        default () {
          return this.starColor
        }
      },
      textColor: {
        type: String,
        default: 'primary'
      },
      textSize: [String, Number]
    },
    computed: {
      textStyle () {
        let fontSize = this.textSize
        if (fontSize === 'small') {
          fontSize = 12
        }
        if (fontSize === 'large') {
          fontSize = 16
        }
        fontSize += 'px'
        return {
          color: !color.has(this.textColor) ? this.textColor : null,
          fontSize
        }
      },
      textClass () {
        if (color.has(this.textColor)) {
          return `kw-${this.textColor}-text-color`
        }
      }
    },
    watch: {
      selectedCount (val) {
        this.$emit('input', val)
      },
      value (val) {
        this.selectedCount = val
      }
    },
    methods: {
      handleSelect (selectedCount) {
        if (this.disabled) return
        this.selectedCount = selectedCount
        this.$emit('select', selectedCount)
      }
    },
    mounted () {
      if (this.value) {
        this.selectedCount = this.value
      }
    }
  }
</script>

<style lang="scss">
  .kw-rating-wrapper{
    display: inline-flex;
    align-items: center;
    &.rating-text-bottom{
      flex-direction: column;
      .kw-rating-stars{
        margin-bottom: 10px;
      }
      .kw-rating-text{
      }
    }
    .kw-rating-stars{
      flex: 1;
      display: flex;
      align-items: center;
      flex-flow: wrap;
      .rating-star{
        margin-right: 10px;
        transition:color .5s;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    .kw-rating-text{
      flex-shrink: 0;
      margin-left: 10px;
      font-size: $font-size;
    }
  }
</style>
