<template>
    <div class="v-message" :class="classNameTypeChat">
        <div class="v-message__content">
            <p>{{message.text}}</p>
            <p class="content__time">{{ message.time }}</p>
        </div>

    </div>
</template>

<script>
    import {computed} from "vue"
    import {storeToRefs} from "pinia";
    import {useChatsStore} from "@/store/chats";

    export default {
        name: 'Message',
        props: {
            message: {
                type: Object,
                default: () => {
                }
            }
        },

        setup: (props) => {
            const {chat} = storeToRefs(useChatsStore())

            const classNameTypeChat = computed(()=>{
                return {
                    'chat__own': props.message.type === 'own',
                    'chat__others' : props.message.type === 'others'
                }
            })


            return {chat, classNameTypeChat}
        }


    }
</script>

<style scoped>

</style>