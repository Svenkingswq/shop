import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: "/home", component: Home },
        { path: "/login", component: Login },
    ]
})
export default router