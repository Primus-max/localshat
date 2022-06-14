import { createRouter, createWebHistory } from 'vue-router'
import ContactList from "@/components/contacts/ContactList";
import ContactUser from "@/components/contacts/ContactUser";
import ContactUserInfo from "@/components/contacts/ContactUserInfo";
import UserList from "@/components/users/UserList";
import UserChat from "@/components/users/chat/UserChat"



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
  {
    path: '/chats',
    name: 'chats',
    component: UserList
  },
  {
    path: '/chat',
    name:'chat',
    component: UserChat,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
