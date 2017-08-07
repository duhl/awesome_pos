import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pos from '@/components/pages/Pos'
import Shop from '@/components/pages/Shop'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/test/awesome_pos',
        name: 'pos',
        component: Pos
    }, {
        path: '/test/awesome_pos/shop',
        name: 'shop',
        component: Shop
    }]
})