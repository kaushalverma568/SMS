import HomePage from './pages/HomePage'
import Consultation from './pages/Consultation'
import Chat from './pages/Chat'
import Request from './pages/Request'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import LiveStream from './pages/LiveStream'
import ExclusiveItems from './pages/ExclusiveItems'
import ProductType from './pages/ProductType'
import BuySale from './pages/BuySale'
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
import Setting from './pages/Settings'
import ServiceDetails from './pages/ServiceDetails'
import DataInput from "./pages/DataInput"
import ServiceDetail from "./pages/ServiceDetailWithProgressBar"
import DataProgress from "./pages/DataProgress"

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
  { path: '/product-type', component: ProductType },
  { path: '/item', component: Item },
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
  {path: '/buy-sale', component: BuySale},
  {path: '/settings', component: Setting},
  {path: '/service-detail', component: ServiceDetails},
  {path: '/data-input', component: DataInput},
  {path: '/service-detail-progress', component: ServiceDetail},
  {path: '/data-progress', component: DataProgress}

]