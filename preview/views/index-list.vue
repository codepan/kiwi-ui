<template>
  <kw-layout>
    <kw-nav>IndexList 索引列表</kw-nav>
    <kw-main has-nav has-footer>
      <kw-index-list :show-indicator="isShowIndicator" ref="indexlistRef">
        <kw-index-group v-for="(group, index) in computedData" :key="index">
          <p slot="divider" style="color: red;">{{group.divider}}</p>
          <kw-index-item v-for="(item, innerIndex) in group.items" @click="handleItemClick(item)" :key="innerIndex">
            <span class="text">{{item.username}}</span>
          </kw-index-item>
        </kw-index-group>
      </kw-index-list>
    </kw-main>
    <kw-footer>
      <kw-list>
        <kw-item title="是否显示指示器">
          <kw-switch slot="value" v-model="isShowIndicator"></kw-switch>
        </kw-item>
      </kw-list>
    </kw-footer>
  </kw-layout>
</template>
<script>
  export default {
    data () {
      return {
        isShowIndicator: false,
        users: [],
        users2: [{
          "_id": "5c4985d77090021ef9b5a9f2",
          "username": "zhangsan",
          "password": "$2a$10$3NXfKA8AhOB3X6O0R6MCNeN6lXxFjeCfMw4KU4xPHMfcAFIO/PATS",
          "avatar": "//www.gravatar.com/avatar/7a651df6057e16356a3be396611ab59c?s=200&r=pg&d=mm",
          "date": "2019-01-24T09:31:03.599Z",
          "__v": 0
        }, {
          "_id": "5c4aaf498697d4323ef3ef13",
          "username": "root",
          "password": "$2a$10$ikMTfE7.k0qfH83Pm7G0zOmpu35ZhAuWGY0tu/BwVyPvuCudtYnJG",
          "nickname": "root",
          "avatar": "//www.gravatar.com/avatar/7a651df6057e16356a3be396611ab59c?s=200&r=pg&d=mm",
          "date": "2019-01-25T06:40:09.087Z",
          "__v": 0
        }, {
          "_id": "5c4ff24ab62825084b0d9263",
          "username": "test",
          "password": "$2a$10$74FPW0xxxluz0.YlthEgCeSTp0mGcQEm7Sd/1uwHifeisasn/sOgK",
          "nickname": "test",
          "avatar": "//www.gravatar.com/avatar/7a651df6057e16356a3be396611ab59c?s=200&r=pg&d=mm",
          "date": "2019-01-29T06:27:22.015Z",
          "__v": 0
        }, {
          "_id": "5c4ff24ab62825084b0d9263",
          "username": "td",
          "password": "$2a$10$74FPW0xxxluz0.YlthEgCeSTp0mGcQEm7Sd/1uwHifeisasn/sOgK",
          "nickname": "test",
          "avatar": "//www.gravatar.com/avatar/7a651df6057e16356a3be396611ab59c?s=200&r=pg&d=mm",
          "date": "2019-01-29T06:27:22.015Z",
          "__v": 0
        }, {
          "_id": "5c4ff24ab62825084b0d9263",
          "username": "tf",
          "password": "$2a$10$74FPW0xxxluz0.YlthEgCeSTp0mGcQEm7Sd/1uwHifeisasn/sOgK",
          "nickname": "test",
          "avatar": "//www.gravatar.com/avatar/7a651df6057e16356a3be396611ab59c?s=200&r=pg&d=mm",
          "date": "2019-01-29T06:27:22.015Z",
          "__v": 0
        }, {
          "_id": "5c4ff24ab62825084b0d9263",
          "username": "ta",
          "password": "$2a$10$74FPW0xxxluz0.YlthEgCeSTp0mGcQEm7Sd/1uwHifeisasn/sOgK",
          "nickname": "tc",
          "avatar": "//www.gravatar.com/avatar/7a651df6057e16356a3be396611ab59c?s=200&r=pg&d=mm",
          "date": "2019-01-29T06:27:22.015Z",
          "__v": 0
        }],
        computedData: []
      }
    },
    methods: {
      setUsers () {
        this.users = [
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三',
          '张三'
        ]
      },
      handleItemClick (item) {
        console.log('ppp', item)
      }
    },
    created () {
      this.setUsers()
      this.$nextTick(() => {
        window.setTimeout(() => {
          this.computedData = this.$refs.indexlistRef.formatData(this.users2, 'username')
        }, 2000)
      })
    }
  }
</script>
