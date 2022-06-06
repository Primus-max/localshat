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

    import {useRouter, useRoute} from 'vue-router';

    export default {
        name: 'ContactList',
        components: {ContactUser},
        async setup() {
            const router = useRouter()
            const route = useRoute()

            const {contacts} = await useContacts()

            const toContactInfo = (contact) => {
                router.push({
                    name: 'contact',
                    query: {'id': contact.id}
                })

                console.log(router)
                console.log(route)
            }

            // console.log(contact)
            return {contacts, toContactInfo}
        }
    }
</script>

<style scoped>

</style>