// import axios from "axios";
// import {ref} from 'vue'
//
// export async function useContacts() {
//     let contacts = ref()
//
//     try {
//         const response = await axios.get('http://localhost:3000/contacts')
//             .then(resp => resp.data)
//         contacts.value = await response
//     } catch (e) {
//         console.log('Произошла ошибка', e)
//     }
//
//     return {contacts}
// }