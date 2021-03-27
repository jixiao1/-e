export default {
  data () {
    return {
      value: 100
    }
  },
  methods: {
    btnAction () {
      console.log('这是mix混入的数据')
    }
  },
  mounted () {
    console.log('mixns混入mounted周期。。。。。')
  }
}
