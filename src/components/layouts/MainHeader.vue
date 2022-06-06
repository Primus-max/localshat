<template>
    <div class="v-header">
        <div class="v-header__back" @click="goBack">
            <i class="material-icons">keyboard_arrow_left</i>
            <span>Back</span>
        </div>
        <div class="v-header__user-info">
            <span>Tom</span>
        </div>
        <div class="right-side"></div>
    </div>
</template>

<script>
    import router from "@/router";

    export default {
        name: 'Header',
        setup() {
            const goBack = () => {
                router.go(-1)
            }

            return {goBack}
        }

    }
</script>

<style scoped>
    .v-header__back {
        cursor: pointer;
    }

</style>