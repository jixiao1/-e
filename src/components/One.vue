<template>
  <div class="box">
    <div>one组件</div>
    <div>{{value}}</div>
    <input type="number" v-model="value">
    <button @click="btnAction">点击</button>
  </div>
</template>

<script>
import TestMix from '../minxs/test'
import TestHello from '../minxs/hello'
export default {
  mixins: [
    TestMix,
    TestHello
  ],
  data () {
    return {
      value: 200
    }
  },
  methods: {
    btnAction () {
      console.log('这是组件中的方法。。。。')
    }
  },
  mounted () {
    console.log('这是组件内的mouted.....')
  }
}
</script>

<style lang='scss'>
.box {
  padding: 20px;
  border: 5px solid red;
  margin-top: 20px;
  >div {
    margin: 10px;
  }
}
</style>
