import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import Consultation from './pages/Consultation'
import Chat from './pages/Chat'
import Request from './pages/Request'

import App from './App'
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(VueRouter)
Vue.use(Vue2TouchEvents)

const routes = [
  { path: '/', component: HomePage },
  { path: '/consultation', component: Consultation },
  { path: '/chat', component: Chat },
  { path: '/request', component: Request },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
