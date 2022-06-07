import {ref, watch} from "vue";
import {useContacts} from "@/use/contacts";
import {useRoute} from "vue-router";


export async function useSetContactInfo() {
    const nameHeader = ref('')
    const route = useRoute()
    const {contacts} = await useContacts()


    watch(route,  () => {
         contacts.value.find(contact => {
            if (+route.query.id === contact.id) {
                nameHeader.value = contact.name
            }
        })
    })

    return {nameHeader}
}