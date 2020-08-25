import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import tr from 'vee-validate/dist/locale/tr.json';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('tr', tr);


Vue.config.productionTip = false

new Vue({
  router,
  store,   
  render: h => h(App)
}).$mount('#app')
