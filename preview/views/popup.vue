<template>
  <div>
    <kw-nav>Popup 弹出框</kw-nav>
    <kw-main has-nav>
      <demo-block title="显示与隐藏">
        <kw-button @click="isShowPopup1 = true">显示popup</kw-button>
      </demo-block>
      <demo-block title="调整显示位置">
        <kw-button @click="isShowPopup2_1 = true">上方</kw-button>
        <kw-button @click="isShowPopup2_2 = true">右侧</kw-button>
        <kw-button @click="isShowPopup2_3 = true">左侧</kw-button>
        <kw-button @click="isShowPopup2_4 = true">中心</kw-button>
      </demo-block>
      <demo-block title="指定高度和限制最大高度">
        <kw-button @click="isShowPopup3 = true">限制最大高度为屏幕高度的80%</kw-button>
      </demo-block>
       <demo-block title="不显示遮罩">
        <kw-button @click="isShowPopup4 = true">不显示遮罩</kw-button>
      </demo-block>
      <demo-block title="监听关闭事件">
        <kw-button @click="isShowPopup5 = true">监听close事件</kw-button>
      </demo-block>
    </kw-main>
    <kw-popup v-model="isShowPopup1">
      <kw-list>
        <kw-item>item 1</kw-item>
        <kw-item>item 2</kw-item>
        <kw-item>item 3</kw-item>
      </kw-list>
    </kw-popup>
    <kw-popup v-model="isShowPopup2_1" position="top">
      出现在上方
    </kw-popup>
    <kw-popup v-model="isShowPopup2_2" position="right">
      <kw-button @click="isShowPopup2_2 = false">关闭</kw-button>
    </kw-popup>
    <kw-popup v-model="isShowPopup2_3" position="left">
      <kw-button @click="isShowPopup2_3 = false">关闭</kw-button>
    </kw-popup>
    <kw-popup v-model="isShowPopup2_4" position="center" :mask-closable="false">
      <img class="image" src="../assets/images/popup.jpeg"/>
    </kw-popup>
    <kw-popup v-model="isShowPopup3" max-height="80%">
      <kw-list>
        <kw-item v-for="item in 20" :key="item">item {{item}}</kw-item>
      </kw-list>
    </kw-popup>
    <kw-popup v-model="isShowPopup4" position="top" :mask="false" ref="popupRef">
      <p class="notice">更新成功</p>
    </kw-popup>
    <kw-popup v-model="isShowPopup5" position="bottom" @close="handleClose">
      <kw-list>
        <kw-item v-for="item in 6" :key="item">item {{item}}</kw-item>
      </kw-list>
    </kw-popup>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isShowPopup1: false,
        isShowPopup2_1: false,
        isShowPopup2_2: false,
        isShowPopup2_3: false,
        isShowPopup2_4: false,
        isShowPopup3: false,
        isShowPopup4: false,
        isShowPopup5: false
      }
    },
    watch: {
      isShowPopup4 (val) {
        window.setTimeout(() => {
          val && this.$refs.popupRef.close()
        }, 2000)
      }
    },
    methods: {
      handleClose () {
        this.$toast('popup被关闭')
      },
      setting () {

      }
    }
  }
</script>
<style>
.notice {
  margin: 0;
  padding: 10px 0;
  text-align: center;
  background: rgba(0, 0, 0, .7);
  color: #fff;
}
.image {
  width:250px;
  height: 400px;
}
</style>