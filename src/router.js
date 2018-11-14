import Vue from 'vue'
import VueRouter from 'vue-router'
import InsuranceRiskList from './components/InsuranceRiskList'
import InsuranceRisk from './components/InsuranceRisk'
import InsuranceRiskCreate from './components/InsuranceRiskCreate'

import Home from './components/Home'
import ClientInsuranceRiskList from './components/ClientInsuranceRiskList'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/client/risk/',
      name: 'clientInsuranceRisks',
      component: ClientInsuranceRiskList,
    },
    {
      path: '/risk/create',
      name: 'insuranceRiskCreate',
      component: InsuranceRiskCreate,
    },
    {
      path: '/risk/:id/',
      name: 'insuranceRiskTake',
      component: InsuranceRisk,
    },
    {
      path: '/client/risk/:id/edit',
      name: 'clientInsuranceRiskEdit',
      component: InsuranceRisk,
    },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router
