import {createRouter, createWebHashHistory} from "vue-router";


import ButtonsPage from "@/pages/Buttons/index.vue"
import InputePages from "@/pages/Inputes/index.vue"
import Select from "@/pages/Selects/index.vue"
const routes = [
    {
        path: '/buttons',
        component: ButtonsPage
    },
    {
        path: '/inputes',
        component: InputePages
    },
    {
        path:'/selects',
        component:Select
    }
];


export default createRouter({
    history: createWebHashHistory(),
    routes,
})