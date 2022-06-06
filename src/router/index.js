import { createRouter, createWebHistory } from 'vue-router'
import ContactList from "@/components/contacts/ContactList";
import ContactUser from "@/components/contacts/ContactUser";
import ContactUserInfo from "@/components/contacts/ContactUserInfo";



const routes = [
  {
    path: '/',
    name: 'contacts',
    component: ContactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUserInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
