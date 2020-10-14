import HomePage from './pages/HomePage'
import Consultation from './pages/Consultation'
import Chat from './pages/Chat'
import Request from './pages/Request'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import LiveStream from './pages/LiveStream'
import ExclusiveItems from './pages/ExclusiveItems'
import BuyAndSale from './pages/BuyAndSale'
import Item from './pages/Item'
import SignUp from './pages/SignUP'

// define__routes
export const routes = [
  { path: '/', component: HomePage },
  { path: '/consultation', component: Consultation },
  { path: '/chat', component: Chat },
  { path: '/request', component: Request },
  { path: '/profile', component: Profile },
  { path: '/profile-details', component: ProfileDetails },
  { path: '/live-stream', component: LiveStream },
  { path: '/exclusive-items', component: ExclusiveItems },
  { path: '/buy-sale', component: BuyAndSale },
  { path: '/item', component: Item },
  { path: '/sign-up', component: SignUp },

]