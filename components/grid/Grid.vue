<template>
  <div class="kw-grid">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'kwGrid',
    props: {
      cols: {
        type: Number,
        default: 3
      },
      hasBorder: {
        type: Boolean,
        default: false
      },
      itemHeight: {
        type: [String, Number],
        default: 80
      },
      itemSpacing: {
        type: [String, Number],
        default: 0
      }
    },
    computed: {
      height () {
        if (/^\d+(\.\d+)?$/.test(this.itemHeight)) {
          return this.itemHeight + 'px'
        }

        return this.itemHeight
      },
      spacing () {
        if (/^\d+(\.\d+)?$/.test(this.itemSpacing)) {
          return this.itemSpacing + 'px'
        }
        return this.itemSpacing
      }
    },
    methods: {
      setGridItemStyles () {
        let clientWidth = this.$el.clientWidth
        let $children = this.$children

        let lastRowNumber = $children.length % this.cols === 0 ? $children.length / this.cols : Math.floor($children.length / this.cols) + 1
        let lastRowFirstItemIndex = (lastRowNumber - 1) * this.cols
        let itemWidth = (clientWidth - (this.cols - 1) * this.itemSpacing) / this.cols

        $children.forEach(child => {
          child.$el.style.width = `${itemWidth}px`

          if (this.hasBorder) {
            if (this.itemSpacing) {
              child.$el.style.border = '1px solid #e8e8e8'
            } else {
              child.$el.style.borderBottom = child.$el.style.borderRight  = '1px solid #e8e8e8'
            }
          }

          if (this.itemHeight) {
            child.$el.style.height = this.itemHeight === 'item-width' ? `${itemWidth}px` : this.height
          }

          if (this.itemSpacing) {
            child.$el.style.marginLeft = this.spacing
            child.$el.style.marginBottom = this.spacing
          }
        })


        // 动态添加GridItem组件后，this.$children获取到的顺序和页面上的顺序不一致，导致样式渲染有问题
        // 通过以下方法fix该问题
        let gridItems = this.$el.querySelectorAll('.kw-grid-item')
        gridItems.forEach((item, index) => {
          if (this.itemSpacing) {
            if (index % this.cols === 0) {
              item.style.marginLeft = 0
            }

            if (index >= lastRowFirstItemIndex) {
              item.style.marginBottom = 0
            }
          }

          if (this.hasBorder && !this.itemSpacing) {
            if ((index + 1) % this.cols === 0) {
              item.style.borderRight = 'none'
            }

            if (index >= lastRowFirstItemIndex) {
              item.style.borderBottom = 'none'
            }
          }
        })
      }
    },
    mounted () {
      this.setGridItemStyles()
    },
    /**
     * 解决动态添加GridItem组件后，尺寸不再计算的问题
     */
    updated () {
      this.setGridItemStyles()
    }
  }
</script>

<style lang="scss">
  .kw-grid{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    .kw-grid-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: $content-color;
      &-icon{
        line-height: 1;
        margin-bottom: 10px;
      }
    }
  }
</style>
