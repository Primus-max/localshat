<template>
    <div class="v-main-wrapper">
        <main-header />
        <Suspense>
        <router-view></router-view>
        </Suspense>
        <bottom-nav />
    </div>
</template>

<script>
    import MainHeader from "@/components/layouts/MainHeader";
    import BottomNav from "@/components/layouts/BottomNav";

    export default {
        name: 'MainWrapper',
        components:{MainHeader, BottomNav},
        props:{}

    }
</script>

<style scoped>

</style>