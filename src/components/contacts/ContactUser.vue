<template>
    <div class="v-contact-user" @click="toContactInfo">
        <div class="user__avatar"></div>
        <div class="user__name">
            <span>{{ contact.name }}</span>
        </div>
        <div class="user__status"
             :class="className"
        >
        </div>
    </div>
</template>
<script>
    import {computed} from 'vue'
    export default {
        name: 'ContactUser',
        props: {
            contact: {
                type: Object,
                default: () => {
                }
            }
        },
         setup(props, {emit}) {
            const contact = props.contact

            const toContactInfo = () => {
                emit('to-contact-info')
            }

            const className = computed(()=> {
                return {
                    'online': contact.status === 'online',
                    'offline': contact.status === 'offline'
                }
            })

            return {contact, toContactInfo, className}
        }

    }
</script>

<style scoped>
    .v-contact-user {
        cursor: pointer;
    }

</style>