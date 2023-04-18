import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false


Vue.use( VueGoogleMaps, {
  load: {
    key: 'AIzaSyDoTXDGfEQf71uainUTWyAKmuH6VUUreTY',
    libraries: 'places,routes'
  },
  installComponents: true
});




axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
