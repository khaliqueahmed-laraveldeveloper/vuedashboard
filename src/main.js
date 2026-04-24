import { createApp } from 'vue'
import App from './App.vue'
import test from './components/test.vue'
const app = createApp(App);
app.component('test', test);
app.mount('#app')
