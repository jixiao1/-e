<template>
  <div class="three">three组件
    <div>{{this.$user.name}}</div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$user)
  }
}
</script>

<style lang='scss'>
.three {
  padding: 50px;
  border: 8px solid lightsalmon;
}
</style>
