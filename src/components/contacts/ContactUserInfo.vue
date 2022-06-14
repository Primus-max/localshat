<template>
    <div class="v-contact-user-info">
        <div class="info__avatar"></div>
        <div class="info__content">
            <div class="info__name">
                <span>{{phoneContact.phone}}</span>
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
    import {storeToRefs} from "pinia";

    export default {
        setup() {
            const store = useContactsStore()
            const {currentContact} = storeToRefs(store)
            const phoneContact = ref(currentContact)


            return {phoneContact}
        }

    }
</script>

<style scoped>

</style>