import Vue from 'vue'
import VueRouter from 'vue-router'

import InsuranceRisks from './components/InsuranceRisks'
import InsuranceRisk from './components/InsuranceRisk'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: InsuranceRisks},
    { path: '/risk', name: 'risk', component: InsuranceRisk},
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router
