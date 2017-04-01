import Vue from 'vue'
import VueRouter from 'vue-router'
import message from './views/message.vue'
import contact from './views/contact.vue'
import infocenter from './views/infocenter.vue'
Vue.use(VueRouter)
const routes = [{
        path: '/message',
        component:message
    }, {
        path: '/contact',
        component:contact
    }, {
        path: '/infocenter',
        component:infocenter
    }, {
        path: '/',
        redirect: '/message'
    }
]
const router = new VueRouter({
    routes
})
export default router