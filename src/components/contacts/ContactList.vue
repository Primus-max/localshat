<template>
    <div class="v-contact-list">
        <contact-user/>
    </div>
</template>

<script>
    import ContactUser from "@/components/contacts/ContactUser";

    export default {
        name: 'ContactList',
        components: {ContactUser}

    }
</script>

<style scoped>

</style>