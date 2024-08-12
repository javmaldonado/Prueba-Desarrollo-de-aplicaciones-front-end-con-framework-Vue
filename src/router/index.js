import { createRouter, createWebHashHistory } from 'vue-router'
import ContadorView from '../views/ContadorView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ParentChildView from '../views/ParentChildView.vue'

const routes = [
 
  {
    path: '/contador',
    name: 'contador',
    component: ContadorView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/parentchild',
    name: 'parentchild',
    component: ParentChildView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
