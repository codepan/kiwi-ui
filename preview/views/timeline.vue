<template>
  <kw-layout>
    <kw-nav>Timeline 时间轴</kw-nav>
    <kw-main has-nav>
      <demo-block title="基本用法">
        <kw-timeline>
          <kw-timeline-item>
            <div>商家已接单，准备出库</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已出库，准备递交给快递</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已到达北京，准备派送</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已被百米站代收</div>
          </kw-timeline-item>
        </kw-timeline>
      </demo-block>
      <demo-block title="圆点颜色">
        <kw-timeline dot-color="success">
          <kw-timeline-item>
            <div>商家已接单，准备出库</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已出库，准备递交给快递</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已到达北京，准备派送</div>
          </kw-timeline-item>
          <kw-timeline-item dot-color="danger">
            <div>收件人电话无法接通，宝贝已被百米站代收</div>
          </kw-timeline-item>
        </kw-timeline>
      </demo-block>
      <demo-block title="圆点类型">
        <kw-timeline dot-type="fill">
          <kw-timeline-item>
            <div>商家已接单，准备出库</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已出库，准备递交给快递</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已到达北京，准备派送</div>
          </kw-timeline-item>
          <kw-timeline-item dot-type="outline" dot-color="danger">
            <div>收件人电话无法接通，宝贝已被百米站代收</div>
          </kw-timeline-item>
        </kw-timeline>
      </demo-block>
      <demo-block title="圆点尺寸">
        <kw-timeline dot-size="large">
          <kw-timeline-item>
            <div>商家已接单，准备出库</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <div>宝贝已出库，准备递交给快递</div>
          </kw-timeline-item>
          <kw-timeline-item line-color="danger" line-type="dotted">
            <div>宝贝已到达北京，准备派送</div>
          </kw-timeline-item>
          <kw-timeline-item dot-type="dotted" dot-color="danger">
            <div>收件人电话无法接通，宝贝已被百米站代收</div>
          </kw-timeline-item>
        </kw-timeline>
      </demo-block>
      <demo-block title="竖线颜色">
        <kw-timeline line-color="danger" line-type="dotted">
          <kw-timeline-item>
            <time slot="time">10-27 20:00</time>
            <div>商家已接单，准备出库</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <time slot="time">10-28 16:00</time>
            <div>宝贝已出库，准备递交给快递</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <time slot="time">10-29 08:00</time>
            <div>宝贝已到达北京，准备派送</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <time slot="time">10-29 12:00</time>
            <div>收件人电话无法接通，宝贝已被百米站代收</div>
          </kw-timeline-item>
        </kw-timeline>
      </demo-block>
      <demo-block title="时间位于左侧">
        <kw-timeline time-position="left">
          <kw-timeline-item>
            <time slot="time">10-27</time>
            <div>商家已接单，准备出库</div>
            <div slot="note">接单人：周先生</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <time slot="time">10-28</time>
            <div>宝贝已出库，准备递交给快递</div>
            <div slot="note">快递公司：顺丰</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <time slot="time">10-29</time>
            <div>宝贝已到达北京，准备派送</div>
          </kw-timeline-item>
          <kw-timeline-item>
            <time slot="time">10-29</time>
            <div>收件人电话无法接通，宝贝已被百米站代收</div>
            <div slot="note">百米站联系电话：13344236575</div>
          </kw-timeline-item>
        </kw-timeline>
      </demo-block>
    </kw-main>
  </kw-layout>
</template>
