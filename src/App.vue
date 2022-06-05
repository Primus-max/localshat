<template>
    <main-wrapper/>
</template>

<script>
    import MainWrapper from "@/components/MainWrapper"

    import {useContacts} from '@/use/contacts.js'
    export default {
        name: 'App',
        components:{MainWrapper},

    }
</script>

<style scoped>

</style>
