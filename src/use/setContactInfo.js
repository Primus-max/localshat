import {ref, watch, reactive} from "vue";
import {useContacts} from "@/use/contacts";
import {useRoute} from "vue-router";


export  function useSetContactInfo(contact) {
    const contactInfo =  reactive({
        id: contact?.id,
        name: contact?.name,
        phone: contact?.phone,
        status: contact?.status
    })
    // console.log(contactInfo)


    //let nameHeader = ref(contact)
    ///let userPhone = await ref(contact)
    //const route = useRoute()
    //const {contacts} = await useContacts()

    // Смотрю за изменением роутера и вставляю имя контакта в header
    // watch(route, () => {
    //     contacts.value.find(contact => {
    //         if (+route.query.id === contact.id) {
    //             nameHeader.value = contact.name
    //              userPhone.value = contact.phone
    //            // console.log(userPhone.value)
    //         }
    //     })
    // })

    // const setContactInfo = (contact) => {
    //     return {
    //         name: this.name,
    //         phone: this.phone
    //     }
    // }


    return {contactInfo}
}