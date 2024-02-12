import {createRouter, createWebHashHistory} from "vue-router";


import ButtonsPage from "@/pages/Buttons/index.vue"
import InputePages from "@/pages/Inputes/index.vue"
import Select from "@/pages/Selects/index.vue"
import Switch from "@/pages/Switchs/index.vue"
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
        path:'/Select',
        component:Select
    },
    {
        path:'/switches',
        component:Switch

    }
];


export default createRouter({
    history: createWebHashHistory(),
    routes,
})