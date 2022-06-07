<template>
    <div class="v-contact-list">

            <contact-user
                    v-for="contact in contacts"
                    :key="contact.id"
                    :contact="contact"
                    @to-contact-info="toContactInfo(contact)"
            />

    </div>
</template>

<script>
    import ContactUser from "@/components/contacts/ContactUser";
    import {useContacts} from "@/use/contacts";
    //import {useSetContactInfo} from '@/use/setContactInfo'

    import {useRouter, useRoute} from 'vue-router';

    export default {
        name: 'ContactList',
        components: {ContactUser},
        async setup() {
            const router = useRouter()

            // const route = useRoute()

            const {contacts} = await useContacts()

            const toContactInfo = (contact) => {
                router.push({
                    name: 'contact',
                    query: {'id': contact.id}
                })
                // Вызываю функцию из 'use' и передаю параметр contact для вставки имени в header
                // setNameHeader(contact)
            }

            // console.log(contact)
            return {contacts, toContactInfo}
        }
    }
</script>

<style scoped>

</style>