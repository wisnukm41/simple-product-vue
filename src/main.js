import './assets/main.css'
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import router from './router'
import { rootClasses } from '../formkit.theme'
import Toast from "vue-toastification";

const app = createApp(App)

const toastOption = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
    timeout: 3000,
  }

app
    .use(router)
    .use(plugin, defaultConfig({
        config: {
            rootClasses,
        },
    }))
    .use(Toast, toastOption)

app.mount('#app')
