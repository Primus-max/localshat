import {defineStore} from "pinia"
import axios from "axios";

export const useContactsStore = defineStore('contacts', {
    state: () => ({
        contacts: [],
        currentContact: {}
    }),
    actions: {
        async fetchContacts() {
            this.contacts = []
            try{
                this.contacts = await axios.get('http://localhost:3000/contacts')
                    .then(resp => resp.data)
            }catch (e) {
                console.log('Произошда ошибка', e)
            }
        }
    }
})