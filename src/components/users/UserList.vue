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
    import {useChatsStore} from "@/store/chats"
    import {storeToRefs} from "pinia"

    export default {
        name: 'UserList',
        components: {User},
        props:{
          chat: {
              type: Object,
              default: ()=>{}
          }
        },
        setup: (props) => {
            const store = useChatsStore()
            const {chats} = storeToRefs(store)
            const {fetchChats} = useChatsStore()




            fetchChats()
            return {chats}
        }
    }
</script>

<style scoped>

</style>