import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'

import '@/assets/styles/styles.scss'
import 'material-design-icons-iconfont'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
