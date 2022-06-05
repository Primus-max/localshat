<template>
    <div class="v-contact-list">
        <contact-user/>
    </div>
</template>

<script>
    import ContactUser from "@/components/contacts/ContactUser";
    import {useContacts} from "@/use/contacts";

    export default {
        name: 'ContactList',
        components: {ContactUser},
        async setup() {
            const {contacts} = await useContacts()
            console.log('from contactList',contacts.value)
        }
    }
</script>

<style scoped>

</style>