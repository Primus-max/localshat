<template>
    <div class="v-user-list">
        <User
                v-for="chat in chats"
                :key="chat.id"
                :chat="chat"
        />
    </div>
</template>

<script>
    import User from "@/components/users/User"
    import {useChatsStore} from '@/store/chats'
    import {storeToRefs} from "pinia"

    export default {
        name: 'UserList',
        components: {User},
        setup: () => {
            const store = useChatsStore()
            const {chats} = storeToRefs(store)
            const {fetchChats} = useChatsStore()

            console.log(chats.value)

            fetchChats()
            return {chats}
        }

    }
</script>

<style scoped>

</style>