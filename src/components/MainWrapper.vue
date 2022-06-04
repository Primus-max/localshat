<template>
    <div class="v-main-wrapper">
        <main-header />
        <router-view></router-view>
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