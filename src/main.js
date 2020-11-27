import Vue from 'vue';
import App from './App.vue';
import router from './Router';
import VueRoter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import store from './store';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRoter)
Vue.use(store)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount('#app')
