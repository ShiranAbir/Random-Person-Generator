import { createRouter, createWebHistory } from 'vue-router'
import personView from '../components/person.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/person',
      name: 'person',
      component: personView
    }
  ]
})

export default router
