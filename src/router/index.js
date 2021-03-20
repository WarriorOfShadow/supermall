import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../views/home/Home')
const Search = ()=>import('../views/search/Search')
const Img = ()=>import('../views/img/Img')
const Profile = ()=>import('../views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/img',
    component: Img
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) { return originalPush.call(this, location).catch(err => err)}


export default router
