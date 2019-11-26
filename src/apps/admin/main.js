import Vue from 'vue'
import App from '@/apps/App.vue'
import { adminRouter } from '@/router'

import '@/assets/stylesheets/main.scss'

Vue.prototype.$appName = 'admin'

Vue.config.productionTip = false

new Vue({
  name: 'Admin',
  router: adminRouter,
  render: h => h(App)
}).$mount('#admin')
