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
    import {useRouter} from 'vue-router';
    import {useSetContactInfo} from '@/use/setContactInfo';

    export default {
        name: 'Header',
        async setup() {
            const router = useRouter()
            const {nameHeader} = await useSetContactInfo()

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