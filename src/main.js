import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import sass from './styles/custom.scss'
import router from './router'
import animate from 'animate.css'
import VueKinesis from 'vue-kinesis'
import store from './store'

Vue.use(VueKinesis)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  animate,
  sass,
  store,
  render: h => h(App)
}).$mount('#app')
