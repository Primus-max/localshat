<template>
    <div class="v-user" @click="toUserChat">
        <div class="v-user__avatar"></div>
        <div class="v-user__info">
            <p class="info__name">{{chat.name}}</p>
            <p class="info__last-message">{{chat.chat[chat.chat.length - 1].text}}</p>
        </div>
        <div class="v-user__time">{{chat.chat[chat.chat.length - 1].time}}</div>
    </div>
</template>

<script>
    import {useRouter} from "vue-router"
    export default {
        name: 'User',
        props: {
            chat: {
                type: Object,
                default: () => {}
            }
        },
        setup:(props)=>{
            const router = useRouter()

           const toUserChat = ()=>{
                router.push({
                    name: 'chat',
                    params: {'messages': props.chat.chat, 'user': props.chat}
                })
            }


            return {toUserChat}
        }
    }
</script>

<style scoped>

</style>