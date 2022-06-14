import {defineStore} from "pinia"
import axios from "axios"
import {useRoute} from 'vue-router'
import {reactive, ref, watch} from 'vue'



export const useContactsStore = defineStore('contacts', ()=>{
    const contacts = ref([])
    const currentContact = ref('')
    const route = useRoute()

    // Получаю контакты с сервера
    async function  fetchContacts   () {
        try {
            contacts.value = await axios.get('http://localhost:3000/contacts')
                .then(resp => resp.data)
        } catch (e) {
            console.log('Произошда ошибка', e)
        }
    }

    // Определяю текущего(нажатого)пользователя
    watch(route, ()=>{
        contacts.value.find(contact => {
            if(contact.id === +route.query.id){
                currentContact.value = contact
            }
        })
    })


return{contacts, fetchContacts, currentContact}


    // state: () => ({
    //     contacts: [],
    //     currentContact: {},
    //     // route: useRoute()
    // }),



    // actions: {
    //     async fetchContacts() {
    //         this.contacts = []
    //         try {
    //             this.contacts = await axios.get('http://localhost:3000/contacts')
    //                 .then(resp => resp.data)
    //         } catch (e) {
    //             console.log('Произошда ошибка', e)
    //         }
    //     },
    //
    //     setContactInfo(contact){
    //         this.currentContact = contact
    //
    //     }
    // }
})