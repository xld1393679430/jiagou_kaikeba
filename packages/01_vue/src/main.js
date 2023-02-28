import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './xstore'

Vue.config.productionTip = false

const app = new Vue({
  router: router,
  store,
  data() {
    return {
      aa: 1,
    }
  },
  render: h => h(App)
}).$mount('#app')

console.log('app', app.aa);