import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-croppa/dist/vue-croppa.css'
import VeeValidate from 'vee-validate';
import Croppa from 'vue-croppa';

Vue.use(VeeValidate);
Vue.use(Croppa);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
