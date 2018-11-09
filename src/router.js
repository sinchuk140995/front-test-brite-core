import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import ClientInsuranceRisks from './components/ClientInsuranceRisks'
import InsuranceRiskDetail from './components/InsuranceRiskDetail'
import Login from './components/Login'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/risk/:id/add', name: 'clientInsuranceRiskAdd', component: InsuranceRiskDetail },
    { path: '/risk/:id/edit', name: 'clientInsuranceRiskEdit', component: InsuranceRiskDetail },
    { path: '/risk/client', name: 'clientInsuranceRisks', component: ClientInsuranceRisks },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router
