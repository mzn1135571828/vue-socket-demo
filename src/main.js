import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueSocketIo from "vue-socket.io";

Vue.use(new VueSocketIo({
  debug: true,
  connection: 'http://127.0.0.1:7001/'
}));

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
