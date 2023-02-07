import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'
//import store from "./stores";

import App from './App.vue'
import router from './router'

// import './assets/main.css'

// reactivity object
const GStore = reactive({ flashMessage: '' })

const app = createApp(App)

app.use(createPinia())
// app.use(store);
app.use(router)
app.provide('GStore', GStore) // make this object available for component to use (inject)
app.mount('#app')
