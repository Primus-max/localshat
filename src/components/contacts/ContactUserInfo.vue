<template>
    <div class="v-contact-user-info">
        <div class="info__avatar"></div>
        <div class="info__content">
            <div class="info__name">
                <span>123{{phoneContact}}</span>
            </div>
            <div class="info__tools">
                <button class="start-call">Call</button>
                <button class="start-chat">Chat</button>
            </div>
        </div>
    </div>
</template>

<script>
    // import {useSetContactInfo} from '@/use/setContactInfo'
    import {useContactsStore} from '@/store/contacts'
    import {useRouter, useRoute} from 'vue-router';
    import {ref, watch} from "vue";
    export default {
         setup(){
             const route = useRoute()
             const store = useContactsStore()
             const phoneContact = ref()


             watch(route, () => {
                 phoneContact.value = store.currentContact.phone
                 console.log(phoneContact.value)
                 // if (Object.keys(route.query).length === 0) {
                 //     phoneContact.value = ''
                 // }
             })
             return {phoneContact}
        }

    }
</script>

<style scoped>

</style>