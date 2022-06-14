import {defineStore} from "pinia"
import {reactive, ref} from 'vue'
import axios from "axios";

export const useChatsStore = defineStore('chats', () => {
    const chats = ref([])


    // Получаю список чатов с сервера
    async function fetchChats() {
        try {
            chats.value = await axios.get('http://localhost:3000/chats')
                .then(r =>  r.data)
        } catch (e) {
            console.log('Произошла ошибка', e)
        }
    }
    return {chats, fetchChats}
})