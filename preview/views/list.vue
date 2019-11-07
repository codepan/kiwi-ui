<template>
  <kw-layout>
    <kw-nav>List 列表</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法 点击事件">
        <kw-list>
          <kw-item @click="handleClick">item1</kw-item>
          <kw-item>item2</kw-item>
          <kw-item>item3</kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="可点击样式">
        <kw-list>
          <kw-item is-link>item1</kw-item>
          <kw-item is-link to="icon">
            item2
            <span slot="value">查看Icon组件</span>
          </kw-item>
          <kw-item>item3</kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="二级列表">
        <kw-list>
          <kw-item :is-accordion="true">
            北京市
            <kw-list slot="accordion">
              <kw-item>海淀区</kw-item>
              <kw-item>昌平区</kw-item>
              <kw-item>东城区</kw-item>
            </kw-list>
          </kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="智能化布局">
        <kw-list>
          <kw-item title="title" value="value" is-link></kw-item>
          <kw-item note="12-20 08:20">
            value和note的区别在于：value始终垂直居中，而note始终显示在右上（下）角，当内容超过1行时，两者差异会明显
          </kw-item>
          <kw-item title="幸福" subtitle="能和心爱的人淋一场雨也是一种幸福地方的沙发斯蒂芬但是防守打法但是范德萨发的是方式"></kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="图文列表">
        <kw-list>
          <kw-item icon-type="avatar" subtitle="iconType为avatar，iconPosition为left" title="头像居于左侧">
            <img src="../assets/images/list/shuijiao.jpg" slot="icon">
          </kw-item>
          <kw-item icon-type="avatar" icon-position="right" subtitle="iconType为avatar，iconPosition为left" title="头像居于右侧">
            <img src="../assets/images/list/shuijiao.jpg" slot="icon">
          </kw-item>
          <kw-item icon-type="thumbnail" subtitle="iconType为avatar，iconPosition为left" title="缩略图居于左侧">
            <img src="../assets/images/list/shuijiao.jpg" slot="icon">
          </kw-item>
          <kw-item icon-type="thumbnail" icon-position="right" subtitle="iconType为avatar，iconPosition为left" title="缩略图居于右侧">
            <img src="../assets/images/list/shuijiao.jpg" slot="icon">
          </kw-item>
          <kw-item icon-type="avatar" subtitle="爸爸妈妈，我们需要你们的陪伴，希望忙碌赚钱的你们能抽出时间陪陪我们" title="孩子真逗" note="下午4:30">
            <img src="../assets/images/list/yanjing.jpg" slot="icon">
          </kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="自定义icon样式">
        <kw-list>
          <kw-item icon-style="{width: '100px', height: '100px', borderRadius: '20px', border: '1px solid red'}" subtitle="通过icon-style属性设置" title="自定义icon样式">
            <img src="../assets/images/list/shuijiao.jpg" slot="icon">
          </kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="分隔类型的Item">
        <kw-list>
          <kw-item is-divider>城市</kw-item>
          <kw-item>北京</kw-item>
          <kw-item>上海</kw-item>
          <kw-item is-divider>爱好</kw-item>
          <kw-item>台球</kw-item>
          <kw-item>编程</kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="具有分隔性的Item">
        <kw-list>
          <kw-item>北京</kw-item>
          <kw-item>上海</kw-item>
          <kw-item :divide-top="20">台球</kw-item>
          <kw-item>编程</kw-item>
          <kw-item divide>美女</kw-item>
          <kw-item>设置</kw-item>
        </kw-list>
      </demo-block>
      <demo-block title="滑动触发列表项菜单">
        <kw-list>
          <kw-item slidable :options="options1">上海</kw-item>
          <kw-item slidable :options="options2">北京</kw-item>
        </kw-list>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>

<script>
  export default {
    data () {
      let _this = this
      return {
        options1: [
          {
            text: '删除',
            handler (item) {
              _this.$dialog.confirm('确定删除吗？').then(() => {
                item.remove()
              }).catch(() => {})
            }
          }
        ],
        options2: [
          {
            text: '删除',
            handler (item) {
              _this.$dialog.confirm('确定删除吗？').then(() => {
                item.remove()
              }).catch(() => {})
            }
          }
        ]
      }
    },
    methods: {
      handleClick () {
        this.$dialog.alert('点击了item')
      }
    }
  }
</script>
