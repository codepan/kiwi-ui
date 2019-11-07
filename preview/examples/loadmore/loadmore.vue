<template>
  <kw-layout>
    <kw-nav>Loadmore</kw-nav>
    <kw-main has-nav>
      <kw-loadmore @refresh="refresh" @loadmore="loadmore">
        <kw-list>
          <kw-item v-for="item in items" :key="item" title="item" :value="item"></kw-item>
        </kw-list>
      </kw-loadmore>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    data () {
      return {
        refreshMode: {
          items: [],
          currentPage: 1,
          pageSize: 10
        },
        loadmoreMode: {
          items: [],
          currentPage: 1,
          pageSize: 10
        }
      }
    },
    computed: {
      items () {
        return [...this.refreshMode.items, ...this.loadmoreMode.items]
      }
    },
    methods: {
      loadmore ($loadmore) {
        window.setTimeout(() => {
          this.loadmoreData(++this.loadmoreMode.currentPage)
          $loadmore.loadmoreDone()
        }, 2000)
      },
      refresh ($loadmore) {
        window.setTimeout(() => {
          this.refreshData(this.refreshMode.currentPage++)
          $loadmore.refreshDone()
        }, 1000)
      },
      loadmoreData (currentPage = 1) {
        for (let i = this.loadmoreMode.items.length; i < currentPage * this.loadmoreMode.pageSize; i++) {
          this.loadmoreMode.items.push(i + 1)
        }
      },
      refreshData (currentPage = 1) {
        for (let i = this.refreshMode.items.length; i < currentPage * this.loadmoreMode.pageSize; i++) {
          this.refreshMode.items.unshift(-i)
        }
      }
    },
    created () {
      this.loadmoreData(1)
    }
  }
</script>
