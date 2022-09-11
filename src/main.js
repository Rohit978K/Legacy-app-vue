import Vue from 'vue'
import App from './App.vue'
import router from './router';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { MdButton, MdContent, MdTabs, MdCard, MdAvatar, MdChips } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdCard)
Vue.use(MdAvatar)
Vue.use(MdChips)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
