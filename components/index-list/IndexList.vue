<template>
  <div class="kw-index-list-wrapper">
    <div class="kw-index-mark" :style="{top: markTop + 'px'}">{{markText}}</div>


    <div class="kw-index-list" ref="indexListRef">
      <slot>
        <kw-index-group v-for="group in data" :divider="group.divider" :key="group.divider">
          <kw-index-item v-for="(item, $index) in group.items" :key="$index" @click.native="handleItemClick(item)">{{item}}</kw-index-item>
        </kw-index-group>
      </slot>
    </div>

    <ul class="kw-index-handle" ref="indexHandleRef">
      <li class="kw-index-handle-letter" v-for="(divider, $index) in dividers" :class="{'active': $index === currentHandleIndex}">{{divider}}</li>
    </ul>

    <i class="kw-index-indicator" v-if="showIndicator && isShowIndicator">{{markText}}</i>
  </div>
</template>

<script>
  import pinYin from './pinyin'
  export default {
    name: 'kwIndexList',
    props: {
      showIndicator: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array
      }
    },
    data () {
      return {
        currentGroupIndex: 0, // 当前激活的字母索引，即处于页面顶部的字母索引
        currentHandleIndex: 0, // 当前激活的手柄处的字母索引
        isScrolling: false,
        isShowIndicator: false,
        scrollEventTarget: null,
        indexListTop: 0,
        markTop: -100,
        dividers: []
      }
    },
    watch: {
      isScrolling (val) {
        if (val) {
          this.markTop = this.indexListTop
        } else {
          this.markTop = -100
        }
      }
    },
    computed: {
      markText () {
        return this.dividers[this.currentHandleIndex]
      }
    },
    methods: {
      handleItemClick (item) {
        this.$emit('item-click', item)
      },
      getScrollTop () {
        let element = this.scrollEventTarget
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
        } else {
          return element.scrollTop
        }
      },
      getScrollEventTarget () {
        let currentNode = this.$el
        let overflowY
        while(currentNode && currentNode.nodeName !== 'HTML' && currentNode.nodeName !== 'BODY' && currentNode.nodeType === 1) {
          overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
          if (overflowY === 'auto' || overflowY === 'scroll') {
            return currentNode
          }
          currentNode = currentNode.parentNode
        }
        return window
      },
      /**
       * 获取设置了-webkit-overflow-scrolling:touch的元素
       * 如果有该元素，则返回该元素
       * 否则返回null
       * @returns {*}
       */
      getOverflowScrollingTouch () {
        let currentNode = this.$el
        let overflowScrolling
        while(currentNode && currentNode.nodeName !== 'HTML' && currentNode.nodeName !== 'BODY' && currentNode.nodeType === 1) {
          overflowScrolling = document.defaultView.getComputedStyle(currentNode).webkitOverflowScrolling
          if (overflowScrolling && overflowScrolling === 'touch') {
            return currentNode
          }
          currentNode = currentNode.parentNode
        }
        return null
      },
      handleIndexListScroll () {
        let scrollTop = 0
        let currentGroupIndex = 0
        let $indexGroups = this.$children
        this.scrollEventTarget.addEventListener('scroll', () => {
          scrollTop = this.getScrollTop()
          $indexGroups.forEach(($indexGroup, index) => {
            if (scrollTop >= $indexGroup.$el.offsetTop) {
              currentGroupIndex = index
            }
          })

          this.currentGroupIndex = this.currentHandleIndex = currentGroupIndex
          this.isScrolling = scrollTop > 0
        })
      },
      handleIndexHandleScroll () {
        this.$nextTick(() => { // 不加这句下面的offsetHeight将为0
          let clientY
          let indexHandleDistanceToTop = this.$refs.indexHandleRef.offsetTop - (this.$refs.indexHandleRef.offsetHeight / 2)
          let moveDistanceToTop
          let currentHandleIndex = 0
          let handleItemCount = this.dividers.length

          this.$refs.indexHandleRef.addEventListener('touchstart', event => {
            event.stopPropagation()
            event.preventDefault()
            clientY = event.touches[0].clientY
            moveDistanceToTop = clientY - indexHandleDistanceToTop
            currentHandleIndex = Math.floor(moveDistanceToTop / (this.$refs.indexHandleRef.offsetHeight / handleItemCount))

            if (currentHandleIndex < 0) {
              currentHandleIndex = 0
            }
            if (currentHandleIndex > handleItemCount - 1) {
              currentHandleIndex = handleItemCount - 1
            }
            this.currentHandleIndex = currentHandleIndex

            this.slide(this.currentHandleIndex)
            this.isShowIndicator = true
          })
          this.$refs.indexHandleRef.addEventListener('touchmove', event => {
            event.stopPropagation()
            event.preventDefault()
            clientY = event.touches[0].clientY
            moveDistanceToTop = clientY - indexHandleDistanceToTop
            currentHandleIndex = Math.floor(moveDistanceToTop / (this.$refs.indexHandleRef.offsetHeight / handleItemCount))

            if (currentHandleIndex < 0) {
              currentHandleIndex = 0
            }
            if (currentHandleIndex > handleItemCount - 1) {
              currentHandleIndex = handleItemCount - 1
            }
            this.currentHandleIndex = currentHandleIndex

            this.slide(this.currentHandleIndex)
          })
        })

        this.$refs.indexHandleRef.addEventListener('touchend', () => {
          this.isShowIndicator = false
        })
      },
      slide (index) {
        let $indexGroups = this.$children
        let currentSectionOffsetTop = $indexGroups[index].$el.offsetTop
        let documentHeight = this.$el.offsetHeight
        let clientHeight = document.documentElement.clientHeight
        if (documentHeight - currentSectionOffsetTop < clientHeight) {
          if (documentHeight - document.documentElement.scrollTop > clientHeight) {
            this.scrollEventTarget.scrollTo(0, documentHeight - clientHeight) // 页面滚动到底部
          }
          return
        }
        this.scrollEventTarget.scrollTo(0, currentSectionOffsetTop)
      },
      /**
       * 处理 fixed布局失效的问题
       * 当某一个元素被设置了-webkit-overflow-scrolling:touch css属性时，其子元素被设置position:fixed属性时会失效
       * 当页面滚动时 fixed会被变成absolute，从而出现滚动时fixed元素不不停跳动的现象
       * 当页面禁止滚动时 fixed元素又恢复正常位置
       *
       * 为了解决这个问题，目前没有找到好的解决方案。
       *
       * 该方案思想为：判断页面中是否存在设置了-webkit-overflow-scrolling:touch的元素
       * 若存在，则将其fixed子元素移至于其平级的位置，即将子元素变为其兄弟节点
       * 由此，fixed元素就不会再遭受-webkit-overflow-scrolling:touch这个属性的影响
       */
      handleFixedInvalidIssue () {
        if (this.getOverflowScrollingTouch()) {
          let $indexHandle = document.querySelector('.kw-index-handle')
          $indexHandle.classList.add('kw-index-handle-has-moved')
          this.scrollEventTarget.parentNode.appendChild($indexHandle)

          let $indexMark = document.querySelector('.kw-index-mark')
          $indexMark.classList.add('kw-index-mark-has-moved')
          this.scrollEventTarget.parentNode.appendChild($indexMark)
        }
      },
      getPinYinInstance () {
        return pinYin
      },
      formatData (originData = [], key) {
        if (!originData) {
          return
        }
        if (!Array.isArray(originData)) {
          throw Error('originData应该为一个数组')
        }

        let targetData = []
        let tempDataMap = new Map()
        let firstLetter = ''
        originData.forEach(item => {
          if (typeof item === 'string' || typeof item === 'number') {
            firstLetter = pinYin.getFirstLetter(item, true)
          } else if (typeof item === 'object') {
            firstLetter = pinYin.getFirstLetter(item[key], true)
          } else {
            throw Error('originData数组元素应为字符串、数字或对象类型')
          }
          if (!tempDataMap.has(firstLetter)) {
            tempDataMap.set(firstLetter, [item])
          } else {
            tempDataMap.get(firstLetter).push(item)
          }
        })

        tempDataMap.forEach((items, divider) => {
          items = items.sort((a, b) => {
            if (typeof a === 'string' && typeof b === 'string') {
              return a -b
            }
            return a[key].localeCompare(b[key])
          })
          targetData.push({
            divider,
            items
          })
        })

        targetData = targetData.sort((a, b) => {
          return a.divider.localeCompare(b.divider)
        })
        return targetData
      },
    },
    created () {
      this.$on('groupRendered', divider => {
        if (!this.dividers.includes(divider)) {
          this.dividers.push(divider)
          this.handleIndexHandleScroll()
        }
      })
    },
    mounted () {
      this.$nextTick(() => {
        this.scrollEventTarget = this.getScrollEventTarget()
        this.handleIndexListScroll()
        this.handleFixedInvalidIssue()
        this.indexListTop = this.$el.getBoundingClientRect().top
      })
    }
  }
</script>

<style lang="scss">
  @mixin kw-index-handle {
    position: fixed;
    top:50%;
    right: 5px;
    transform: translateY(-50%);
    margin:0;
    padding: 0;
    list-style: none;
    font-size: $font-size-small;
    color: $content-color;
    .kw-index-handle-letter{
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      margin:0;
      padding:0;
      list-style: none;
      &:not(:last-child){
        margin-bottom: 10px;
      }
      &.active{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: $color-success;
        color:$color-light;

      }
    }
  }
  @mixin kw-index-mark {
    position: fixed;
    top:0;
    z-index: 2;
    width: 100%;
    padding: 5px 15px;
    border-bottom: 1px solid $border-color;
    background: $bg-color;
    color:$color-success;
  }

  .kw-index-list-wrapper{
    position: relative;
    &::-webkit-scrollbar{
      display: none;
      width: 0;
    }
    .kw-index-mark{
      @include kw-index-mark;
    }
    .kw-index-handle{
      @include kw-index-handle;
    }
    .kw-index-indicator{
      position: fixed;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: rgba(0, 0, 0, .6);
      color:$color-light;
      font-size: 20px;
      font-style: normal;
    }
  }

  .kw-index-handle-has-moved{
    @include kw-index-handle;
  }
  .kw-index-mark-has-moved{
    @include kw-index-mark;
  }
</style>
