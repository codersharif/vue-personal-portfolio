import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import animate from 'animate.css'
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  animate,
  render: h => h(App)
}).$mount('#app')
