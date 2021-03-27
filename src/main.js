import Vue from 'vue'
import App from './App.vue'

import User from './User/index'

Vue.use(User)

Vue.config.productionTip = false
const user = new User('lisi', 60)

new Vue({
  // router,
  // store,
  render: h => h(App),
  user
}).$mount('#app')
