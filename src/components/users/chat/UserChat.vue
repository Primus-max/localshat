<template>
    <div class="v-user-chat">
        <Message

        />

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

    export default {
        name: 'UserChat',
        components: {Message},
        setup:()=>{
            const textValue = ref('')

            const sendMessage = ()=> {

            }


            return {textValue, sendMessage}
        }
    }
</script>

<style scoped>

</style>