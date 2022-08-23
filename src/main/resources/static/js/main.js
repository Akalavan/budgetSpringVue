import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from "./pages/App.vue";
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.mount('#app')