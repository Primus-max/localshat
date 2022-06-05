import axios from "axios";
import {ref} from 'vue'

export async function  useContacts() {
    let contacts = ref()

    const response = await axios.get('http://localhost:3000/contacts')
        .then(resp =>  resp.data)
     contacts.value = await response

    return {contacts}
}