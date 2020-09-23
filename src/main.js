import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import Consultation from './pages/Consultation'
import App from './App'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/consultation', component: Consultation }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
