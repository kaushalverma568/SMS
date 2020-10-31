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
import OurVideos from './pages/OurVideos.vue'
import MyVideos from './pages/MyVideos.vue'
import Details from './pages/Details.vue'
import PurchaseConfirmation from './pages/PurchaseConfirmation.vue'
import LockedVideo from './pages/LockedVideo.vue'
import Blog from './pages/Blogs.vue'
import MyBlogs from './pages/MyBlogs.vue'

import Carousel from './pages/Carousel'

import BlogDetail from './pages/BlogDetails'


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
  { path: '/product/:id', component: Item },
  { path: '/sign-up', component: SignUp },
  {path: '/our-videos', component: OurVideos},
  {path: '/my-videos', component: MyVideos},
  {path: '/details', component: Details},
  {path: '/purchase-confirmation', component: PurchaseConfirmation},
  {path: '/lock-vid', component: LockedVideo},
  {path: '/blog', component: Blog},
  {path: '/my-blogs', component: MyBlogs},
  {path: '/car', component: Carousel},
  {path: '/blog-detail', component: BlogDetail},


]