import Vue from 'vue'
import App from '@/apps/App.vue'
import { genericRouter } from '@/router'

import '@/assets/stylesheets/main.scss'

Vue.prototype.$appName = 'generic'

Vue.config.productionTip = false

new Vue({
  name: 'Generic',
  router: genericRouter,
  render: h => h(App)
}).$mount('#app')
