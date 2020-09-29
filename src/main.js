import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import Consultation from './pages/Consultation'
import Chat from './pages/Chat'
import Request from './pages/Request'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import LiveStream from './pages/LiveStream'
import ExclusiveItems from './pages/ExclusiveItems'
import BuyAndSale from './pages/BuyAndSale'

import App from './App'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(VueRouter)
Vue.use(Vue2TouchEvents)

const routes = [
  { path: '/', component: HomePage },
  { path: '/consultation', component: Consultation },
  { path: '/chat', component: Chat },
  { path: '/request', component: Request },
  { path: '/profile', component: Profile },
  { path: '/profile-details', component: ProfileDetails },
  { path: '/live-stream', component: LiveStream },
  { path: '/exclusive-items', component: ExclusiveItems },
  { path: '/buy-sale', component: BuyAndSale },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
