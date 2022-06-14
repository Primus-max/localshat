<template>
    <div class="v-header">
        <div v-if="nameHeader" class="v-header__back" @click="goBack">
            <i class="material-icons">keyboard_arrow_left</i>
            <span>Back</span>
        </div>
        <div class="v-header__user-info">
            <span>{{ nameHeader.name }}</span>
        </div>
        <div class="right-side"></div>
    </div>
</template>

<script>
    import {ref, watch, computed} from 'vue'
    import {useRouter, useRoute} from 'vue-router'
    import {useContactsStore} from '@/store/contacts'
    import {storeToRefs} from "pinia"

    export default {
        name: 'Header',
        setup() {
            const router = useRouter()
            // const route = useRoute()
            const store = useContactsStore()
            const {currentContact} = storeToRefs(store)
            const nameHeader = ref(currentContact)


            const goBack = () => {
                router.go(-1)
                nameHeader.value = ''
            }

            return {goBack, nameHeader}
        }

    }
</script>

<style scoped>
    .v-header__back {
        cursor: pointer;
    }

</style>