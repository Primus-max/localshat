import {ref, reactive} from 'vue'

export async function useSetContactInfo(contact) {
     let nameHeader = await contact?.name


    console.log('это то-что надо', nameHeader)


    return {nameHeader}

}