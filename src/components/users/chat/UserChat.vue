<template>
    <div class="v-user-chat">
        <Message
                v-for="message in chat.chat"
                :key="message.id"
                :message="message"
        >

        </Message>

        <div class="input__field">
            <input
                    type="text"
                    class="v-user-chat__textfield"
                    v-model="textValue"
                    @keypress.enter="sendMessage"
            >
            <i class="material-icons"
               @click="sendMessage"
            >
                send
            </i>
        </div>
    </div>
</template>

<script>
    import Message from "./Message"
    import {ref} from "vue"
    import {useChatsStore} from "@/store/chats";
    import {storeToRefs} from "pinia";

    export default {
        name: 'UserChat',
        components: {Message},
        props: {
            message: {
                type: Object,
                default: () => {
                }
            }
        },

        setup:(props)=>{
            const {chat} = storeToRefs(useChatsStore())
            const textValue = ref('')


            const sendMessage = ()=> {
                console.log(message)
                let newChat = {

                }
            }


            return {textValue, sendMessage, chat}
        }
    }
</script>

<style scoped>

</style>