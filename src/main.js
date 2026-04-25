import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import componentOne from './components/componentOne.vue'
import componentTwo from './components/componentTwo.vue'
import App from './App.vue'
import test from './components/test.vue'
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/com1', component: componentOne },
        { path: '/com2', component: componentTwo },
    ]
});
app.use(router);
app.mount('#app')
