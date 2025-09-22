import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// ✅ Importer le plugin QR Reader


const app = createApp(App)

app.use(router)
app.use(vuetify)

// ✅ Installer le plugin QR Reader pour pouvoir utiliser <QrReader> dans tes composants


app.mount('#app')
