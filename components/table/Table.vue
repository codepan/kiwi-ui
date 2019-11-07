<template>
  <div class="kw-table-wrapper">
    <!-- 用来承载table内容，但是内容需要在组件中处理加工，故此处将其隐藏不予以显示 -->
    <div v-show="false">
      <slot></slot>
    </div>
    <table class="kw-table" :class="[{'has-border': border}, tableClass]">
      <thead class="kw-table-head">
        <tr>
          <template v-for="col in cols">
            <th :style="colStyle(col)">
              {{col.title}}
            </th>
          </template>
        </tr>
      </thead>
      <tbody class="kw-table-body" :class="{'is-stripe': stripe}">
        <tr v-if="!data || data.length === 0">
          <td :colspan="cols.length" align="center">暂无数据</td>
        </tr>
        <tr
          v-for="(row, $index) in data"
          @click="handleRowEvent(row, $index, 'click')">
          <td v-for="(value, key, index) in row" :class="{'nowrap': cols[index] && cols[index].nowrap}">
            {{value}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'kwTable',
    props: {
      data: {
        type: Array,
        required: true
      },
      border: {
        type: Boolean,
        default: false
      },
      stripe: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: 'left'
      }
    },
    data () {
      return {
        cols: []
      }
    },
    computed: {
      tableClass () {
        let aligns = ['left', 'center', 'right']
        let align = aligns.includes(this.align) ? this.align : 'left'
        return `kw-table--${align}`
      }
    },
    methods: {
      colStyle (col) {
        return col.width ? `${col.width}px` : ''
      },
      processTable () {
        let cols = this.$children
        cols.forEach(col => {
          this.cols.push({
            title: col.title,
            width: col.width,
            nowrap: col.nowrap
          })
        })
      },
      handleRowEvent (row, index, event) {
        this.$emit(`row-${event}`, row, index)
      }
    },
    mounted () {
      this.processTable()
    }
  }
</script>

<style lang="scss">
  @mixin table-aligns {
    @each $align in left, center, right {
      &--#{$align} {
        tr th, tr td {
          text-align: $align;
        }
      }
    }
  }
  .kw-table-wrapper{
    width: 100%;
    overflow: auto;
    .kw-table{
      min-width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      background: $color-light;
      &.has-border{
        tr{
          th, td{
            border: 1px solid $border-color;
          }
        }
      }
      @include table-aligns;
      tr{
        th, td{
          padding: 5px;
          color: $content-color;
        }
      }
      .kw-table-head{
        background: #eef1f6;
        tr{
          th{
            white-space: nowrap;
            color: $title-color;
          }
        }
      }
      .kw-table-body{
        tr{
          td{
            &.nowrap{
              white-space: nowrap;
            }
          }
        }
        &.is-stripe{
          tr:nth-child(even){
            background: $bg-color;
          }
        }
      }
    }
  }
</style>
