
class User {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  say () {
    alert(`my name is ${this.name}, I am ${this.age}`)
  }
}

User.install = (Vue, options) => {
  // console.log(Vue, options)
  // console.log('User.install ......')
  Vue.mixin({
    created () {
      console.log(this.$root.$options.user)
      if (this.$root.$options.user) {
        // 如果有配置过user，那么给内部的组件和实例配$user可以访问到这个user对象
        this.$user = this.$root.$options.user
      }
    }
  })
}

export default User
