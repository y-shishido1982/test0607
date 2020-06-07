import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//ここを追加
import User from '../views/User.vue' 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },


    // ここから追加
    { 
      path: '/User/:uid',
      name: 'user',
      component: User
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
