<template>

    <div class="v-contact-user" @click="toContactInfo">
        <div class="user__avatar"></div>
        <div class="user__name">
            <span>{{ contact.name }}</span>
        </div>
        <div class="user__status">
            <span>{{contact.status}}</span>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ContactUser',
        props:{
            contact:{
                type: Object,
                default: ()=> {}
            }
        },
        setup(props, {emit}){
            const contact = props.contact

            const toContactInfo = ()=> {
                emit('to-contact-info')
            }

            return {contact, toContactInfo}
        }

    }
</script>

<style scoped>

</style>