import {createRouter, createWebHashHistory} from "vue-router";


import ButtonsPage from "@/pages/Buttons/index.vue"
import InputePages from "@/pages/Inputes/index.vue"

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
        path: '/tw',
        component: ()=>import("../pages/home.vue")
    }
];


export default createRouter({
    history: createWebHashHistory(),
    routes,
})