<template>
  <kw-layout>
    <kw-nav>
      ButtonGroup 按钮组
    </kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-button-group>
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
      </demo-block>
      <demo-block title="不同颜色">
        <kw-button-group color="danger">
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
        <kw-button-group color="primary">
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
        <kw-button-group color="success">
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
      </demo-block>

      <demo-block title="不同尺寸">
        <kw-button-group size="small">
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
        <kw-button-group>
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
        <kw-button-group size="large">
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
      </demo-block>

      <demo-block title="圆角样式">
        <kw-button-group shape="round" color="info">
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
      </demo-block>

      <demo-block title="高亮效果">
        <kw-button-group color="info" highlight>
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
        <kw-button-group color="royal" highlight>
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
      </demo-block>

      <demo-block title="点击事件">
        <kw-button-group color="info" highlight @click="handleClick">
          <kw-button>左手</kw-button>
          <kw-button>猪手</kw-button>
          <kw-button>右手</kw-button>
        </kw-button-group>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
<script>
  export default {
    methods: {
      handleClick(activeIndex) {
        this.$toast(`您点击了第${activeIndex + 1}个按钮`)
      }
    }
  }
</script>
