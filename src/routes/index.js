import {createRouter, createWebHashHistory} from "vue-router";


import ButtonsPage from "@/pages/Buttons/index.vue"
import InputePages from "@/pages/Inputes/index.vue"
import Select from "@/pages/Selects/index.vue"
import Switch from "@/pages/Switchs/index.vue"
import About from "@/pages/About/index.vue"
import Contactus from '@/pages/Contactus/index.vue'
import Markets from '@/pages/Markets/index.vue'
import Blog from '@/pages/Blog/index.vue'
import Map from '@/components/map/index.vue'



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

    },
    {
    path: '/about',
        component:About
    },
    {
        path:'/contactus',
        component:Contactus

    },
    {
        path:'/markets',
        component:Markets
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/map',
        component: Map
    }

];


export default createRouter({
    history: createWebHashHistory(),
    routes,
})