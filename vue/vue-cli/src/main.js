import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MessageTip from '@/components/message-tip'
Vue.use(MessageTip)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
