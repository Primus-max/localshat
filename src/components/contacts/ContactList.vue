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

    import {useRouter} from 'vue-router';
    import {useContactsStore} from '@/store/contacts';
    import {storeToRefs} from "pinia";

    export default {
        name: 'ContactList',
        components: {ContactUser},
        setup() {
            const router = useRouter()
            const {contacts} = storeToRefs(useContactsStore())
            const {fetchContacts} = useContactsStore()


            const toContactInfo = (contact) => {
                router.push({
                    name: 'contact',
                    query: {'id': contact.id}
                })
            }

            // Загружаю список контактов с сервера
            fetchContacts()
            return {contacts, toContactInfo}
        }
    }
</script>

<style scoped>

</style>