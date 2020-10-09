import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Vue2TouchEvents from 'vue2-touch-events'
import vuetify from './plugins/vuetify';
//  inport {routes} from routes file
import { routes } from './routes'
Vue.use(VueRouter)

Vue.use(Vue2TouchEvents)

// setup new rouer
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
