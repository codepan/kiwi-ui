<template>
  <kw-layout>
    <kw-nav>Loading 加载</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-button @click="openLoading(0)">基础loading</kw-button>
      </demo-block>
      <demo-block title="添加文字">
        <kw-button @click="openLoading(1)">含有文字的loading</kw-button>
      </demo-block>
      <demo-block title="自定义样式">
        <kw-button @click="openLoading(2)">自定义样式的loading</kw-button>
      </demo-block>
      <demo-block title="含有遮罩">
        <kw-button @click="openLoading(3)">含有遮罩的loading</kw-button>
      </demo-block>
      <demo-block title="指定加载器">
        <kw-button @click="openLoading(4)">指定加载器</kw-button>
        <kw-button @click="openLoading(5)">细粒度配置加载器</kw-button>
      </demo-block>
      <demo-block title="非Vue实例中使用">
        <kw-button @click="openLoading(6)">打开loading</kw-button>
        <kw-button @click="closeLoading">关闭loading</kw-button>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  import Loading from '~components/loading'
  export default {
    data () {
      return {
        loading: null
      }
    },
    methods: {
      openLoading (index) {
        switch (index) {
          case 0:
            this.loading = this.$loading()
            this.timeoutClose()
            break
          case 1:
            this.loading = this.$loading({
              text: '加载中'
            })
            this.timeoutClose()
            break
          case 2:
            this.loading = this.$loading({
              text: '加载中',
              className: 'my-loading'
            })
            this.timeoutClose()
            break
          case 3:
            this.loading = this.$loading({
              mask: true
            })
            this.timeoutClose()
            break
          case 4:
            this.loading = this.$loading({
              spinner: 'snake'
            })
            this.timeoutClose()
            break
          case 5:
            this.loading = this.$loading({
              spinner: {
                type: 'snake',
                color: "success",
                size: 'large'
              }
            })
            this.timeoutClose()
            break
          case 6:
            Loading.open()
        }
      },
      timeoutClose () {
        window.setTimeout(() => {
          this.loading.close()
        }, 1000)
      },
      closeLoading () {
        Loading.close()
      }
    }
  }
</script>
<style>
  .my-loading{
    background: red;
  }
</style>
