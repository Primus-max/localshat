<template>
    <div class="v-header">
        <div class="v-header__back" @click="goBack">
            <i class="material-icons">keyboard_arrow_left</i>
            <span>Back</span>
        </div>
        <div class="v-header__user-info">
            <span>{{ nameHeader }}</span>
        </div>
        <div class="right-side"></div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import {useRouter, useRoute} from 'vue-router'
    import {useContactsStore} from '@/store/contacts'

    export default {
        name: 'Header',
        setup() {
            const router = useRouter()
            const route = useRoute()
            const store = useContactsStore()
            const nameHeader = ref()



            const goBack = () => {
                router.go(-1)
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