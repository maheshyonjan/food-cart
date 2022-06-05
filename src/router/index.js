import {createRouter, createWebHistory} from'vue-router'

//import Cart from '../views/Cart'
import Home from '../views/Home'
const routes = [
    // { 
    //     path: '/Cart.vue',
    //     name: 'Cart',
    //     component: Cart
    // },
    {
        path: '/',
        name:'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

// const routes = [
    
//     { path: '/Cart', component: Cart}
// ]
// const router = new vueRouter({
//     routes
// })
