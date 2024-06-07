import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/components/login.vue'
import registerUser from'@/components/registerUser.vue'
import sidebar from '@/components/sidebar.vue'
import usuarios from '@/components/usuarios.vue'
import personas from '@/components/personas.vue'
import medicamentos from '@/components/medicamentos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component:registerUser
    },
    {
      path: '/home',
      name: 'home',
      component:sidebar,
      children:[
        {path:'/person',name:'personas',component:personas},
        {path:'/medicament',name:'medicamentos',component:medicamentos}
      ]
    },
    {
      path: '/user',
      name: 'user',
      component:usuarios
    },
    {
      path: '/person',
      name: 'person',
      component:personas
    }]
})

export default router
