<template>
  <div class="kw-loadmore">
    <div class="kw-loadmore-container" :style="style">
      <div class="kw-loadmore-top">
        <div class="kw-loadmore-icon">
          <kw-spinner color="#515a6e" v-if="refreshStatus === STATUS.DOING"></kw-spinner>
          <kw-icon :icon="refreshStatus === STATUS.CREATE ? 'arrow-down' : 'arrow-up'" v-else></kw-icon>
        </div>
        <span class="kw-loadmore-text">{{refreshText}}</span>
      </div>

      <slot></slot>

      <div class="kw-loadmore-allloaded-text" v-if="allLoaded && allLoadedText">{{allLoadedText}}</div>
      <div class="kw-loadmore-bottom">
        <kw-spinner color="#515a6e" v-if="loadStatus === STATUS.DOING"></kw-spinner>
        <span class="kw-loadmore-text">{{loadmoreText}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'kwLoadmore',
    data () {
      const STATUS = {
        CREATE: 'create',
        READY: 'ready',
        DOING: 'doing',
        DONE: 'done'
      }

      return {
        STATUS,
        scrollEventTarget: null,
        translateDistance: 0,
        refreshStatus: STATUS.CREATE,
        loadStatus: STATUS.CREATE,
        refreshText: this.refreshCreateText,
        loadmoreText: this.loadmoreCreateText,
        translateHandler: {
          startY: 0,
          endY: 0,
          currentY: 0,
          moveDistance: 0,
          direction: ''
        },
        refreshing: false, // 是否正在刷新数据
        loading: false // 是否正在加载更多数据
      }
    },
    props: {
      refreshCreateText: {
        type: String,
        default: '下拉刷新'
      },
      refreshReadyText: {
        type: String,
        default: '松手刷新'
      },
      refreshDoingText: {
        type: String,
        default: '刷新中...'
      },
      refreshDoneText: {
        type: String,
        default: '刷新完毕'
      },
      refreshDistance: {
        type: Number,
        default: 70
      },
      loadmoreCreateText: {
        type: String,
        default: '上拉加载更多'
      },
      loadmoreReadyText: {
        type: String,
        default: '松手加载更多'
      },
      loadmoreDoingText: {
        type: String,
        default: '加载中...'
      },
      loadmoreDoneText: {
        type: String,
        default: '加载完毕'
      },
      loadmoreDistance: {
        type: Number,
        default: 70
      },
      allLoaded: {
        type: Boolean,
        default: false
      },
      allLoadedText: String
    },
    computed: {
      style () {
        return {
          transform: `translate3d(0, ${this.translateDistance}px, 0)`
        }
      }
    },
    watch: {
      refreshStatus (status) {
        switch (status) {
          case this.STATUS.CREATE:
            this.refreshText = this.refreshCreateText
            break
          case this.STATUS.READY:
            this.refreshText = this.refreshReadyText
            break
          case this.STATUS.DOING:
            this.refreshText = this.refreshDoingText
            break
          case this.STATUS.DONE:
            this.refreshText = this.refreshDoneText
            break
        }
      },
      loadStatus (status) {
        switch (status) {
          case this.STATUS.CREATE:
            this.loadmoreText = this.loadmoreCreateText
            break
          case this.STATUS.READY:
            this.loadmoreText = this.loadmoreReadyText
            break
          case this.STATUS.DOING:
            this.loadmoreText = this.loadmoreDoingText
            break
          case this.STATUS.DONE:
            this.loadmoreText = this.loadmoreDoneText
            break
        }
      }
    },
    methods: {
      init () {
        this.scrollEventTarget = this.getScrollEventTarget()
        this.bindEvents()
      },
      bindEvents () {
        this.$el.addEventListener('touchstart', this.handleTouchStart)
        this.$el.addEventListener('touchmove', this.handleTouchMove)
        this.$el.addEventListener('touchend', this.handleTouchEnd)
      },
      isReachedBottom () {
        if (this.scrollEventTarget === 'window') {
          return (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight >= document.body.scrollHeight
        }
        return this.scrollEventTarget.scrollTop + this.scrollEventTarget.clientHeight >= this.scrollEventTarget.scrollHeight
      },
      handleTouchStart (event) {
        let touch = event.touches[0]
        this.translateHandler.startY = touch.clientY
      },
      handleTouchMove (event) {
        let touch = event.touches[0]
        this.translateHandler.currentY = touch.clientY

        this.translateHandler.moveDistance = this.translateHandler.currentY - this.translateHandler.startY

        this.translateHandler.direction = this.translateHandler.moveDistance > 0 ? 'down' : 'up'

        if (this.translateHandler.direction === 'down' && this.getScrollTop() === 0 && (this.$listeners.refresh && typeof this.$listeners.refresh === 'function')) {
          this.translate(this.translateHandler.moveDistance)
        }

        if (this.translateHandler.direction === 'up' && this.isReachedBottom() && !this.allLoaded && (this.$listeners.loadmore && typeof this.$listeners.loadmore === 'function')) {
          this.translate(this.translateHandler.moveDistance)
        }
      },
      handleTouchEnd (event) {
        let touch = event.changedTouches[0]
        this.translateHandler.endY = touch.clientY

        if (this.translateHandler.direction === 'down') {
          if (this.refreshStatus === this.STATUS.CREATE) {
            this.translate(0)
          }
          if (this.refreshStatus === this.STATUS.READY) {
            this.refreshStatus = this.STATUS.DOING
            this.translate(50)
            this.refresh()
          }
        }

        if (this.translateHandler.direction === 'up') {
          if (this.loadStatus === this.STATUS.CREATE) {
            this.translate(0)
          }
          if (this.loadStatus === this.STATUS.READY) {
            this.loadStatus = this.STATUS.DOING
            this.translate(-50)
            this.loadmore()
          }
        }
      },
      translate (moveDistance) {
        if (this.translateHandler.direction === 'down') {
          if (moveDistance > this.refreshDistance) {
            this.refreshStatus = this.STATUS.READY
          }
        }

        if (this.translateHandler.direction === 'up') {
          if (Math.abs(moveDistance) > this.loadmoreDistance) {
            this.loadStatus = this.STATUS.READY
          }
        }
        this.translateDistance = moveDistance
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
      getScrollTop () {
        let element = this.scrollEventTarget
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
        } else {
          return element.scrollTop
        }
      },
      refresh () {
        if (this.refreshing) { // 正在刷新数据，避免多次刷新问题
          return
        }
        this.refreshing = true
        this.$emit('refresh', this)
      },
      loadmore () {
        if (this.loading) { // 正在加载更多数据，避免多次加载该更多问题
          return
        }
        this.loading = true
        this.$emit('loadmore', this)
      },
      refreshDone () {
        this.refreshing = false // 数据刷新完毕，重置
        this.resetAll()
      },
      loadmoreDone () {
        this.loading = false // 数据加载完毕，重置
        this.resetAll()
      },
      resetAll () {
        this.refreshStatus = this.loadStatus = this.STATUS.CREATE
        this.translate(0)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style lang="scss">
  .kw-loadmore {
    overflow: hidden;
    &-container{
      .kw-loadmore-top, .kw-loadmore-bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        &.kw-loadmore-top{
          margin-top: -50px;
        }
        &.kw-loadmore-bottom{
          margin-bottom: -50px;
        }
        .kw-loadmore-text{
          margin-left: 14px;
          font-size: 14px;
          color: $content-color;
        }
      }
      .kw-loadmore-allloaded-text{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        font-size: 12px;
        color: $disabled-color;
      }
    }
  }
</style>
