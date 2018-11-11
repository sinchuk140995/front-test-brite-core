import Vue from 'vue'
import VueRouter from 'vue-router'
import InsuranceRiskList from './components/InsuranceRiskList'
import InsuranceRisk from './components/InsuranceRisk'
import InsuranceRiskCreate from './components/InsuranceRiskCreate'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: InsuranceRiskList },
    { path: '/client/risk/', name: 'clientInsuranceRisks', component: InsuranceRiskList },
    { path: '/risk/create', name: 'insuranceRiskCreate', component: InsuranceRiskCreate },
    { path: '/risk/:id/', name: 'insuranceRiskTake', component: InsuranceRisk },
    { path: '/client/risk/:id/edit', name: 'clientInsuranceRiskEdit', component: InsuranceRisk },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router
