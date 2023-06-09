import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { ui } from './components/UI'

const app = createApp(App)

ui.forEach((ui) => {
    app.component(ui.name, ui)
});

app
    .use(store)
    .use(router)
    .mount('#app')
