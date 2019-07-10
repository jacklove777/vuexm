import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../flexble'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
