import Vue from 'vue'
import store from '@/store'
import Main from '@/components/Main.vue'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(Main),
}).$mount(`#app`)

const req = require.context(`@/components/`, false, /\.(js|vue)$/i)
for (const key of req.keys()) {
  const name = key.match(/\w+/)![0]
  Vue.component(name, req(key).default)
}
