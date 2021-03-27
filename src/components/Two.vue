<template>
  <div class="two">two组件
    <div>{{value}}</div>
    <button @click="addClick">+100</button>
  </div>
</template>

<script>
import Test from '../minxs/test'
export default {
  data () {
    return {}
  },
  mixins: [
    Test
  ],
  methods: {
    addClick () {
      this.value += 100
    }
  }
}
</script>

<style lang='scss' scoped>
.two {
  padding: 30px;
  border: 5px solid yellow;
  margin: 10px 0;
}
</style>
