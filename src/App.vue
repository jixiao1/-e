<template>
  <div id="app">
   app
   <One></One>
   <Two></Two>
   <Three></Three>
  </div>
</template>

<script>
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
import Three from '@/components/Three.vue'
export default {
  data () {
    return {}
  },
  components: {
    One,
    Two,
    Three
  }
}
</script>

<style lang="scss">
</style>
