// import {defineStore} from "pinia"
// import axios from "axios";
//
// export const useContacts = defineStore('contacts', {
//     state() {
//         return {
//             contacts: []
//         }
//     },
//     actions: {
//         async getContacts() {
//             const resp = await axios.get('http://localhost:3000/contacts')
//                 .then(response => this.contacts = [...response])
//         }
//     }
// })