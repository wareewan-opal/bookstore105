import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shopitem from '../views/shopitem.vue'
import customers from '../views/customers.vue'
import listitems from '../views/listview.vue'
import query from '../views/query.vue'

const history = createWebHistory()
const routes = [{
    
      path: '/',
      name: 'Home',
      component: Home
    },{
        path: '/shopitem',
        name: 'Shopitem',
        component: Shopitem 
    },{
        path: '/customers',
        name: 'customers',
        component: customers 
    }
    // ,
    // {
    //     path: '/query',
    //     name: 'query',
    //     component: query 
    // }
    ,
    {
        path: '/query/:id',
        name: 'query',
        component: query 
    }
]

const router = createRouter({ history , routes})
export default router
