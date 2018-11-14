import Vue from 'vue'
import VueRouter from 'vue-router'
import InsuranceRiskList from './components/InsuranceRiskList'
import InsuranceRisk from './components/InsuranceRisk'
import InsuranceRiskCreate from './components/InsuranceRiskCreate'

import Home from './components/Home'
import ClientInsuranceRiskList from './components/ClientInsuranceRiskList'
import ClientInsuranceRiskCreate from './components/ClientInsuranceRiskCreate'
import ClientInsuranceRiskEdit from './components/ClientInsuranceRiskEdit'

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
      component: ClientInsuranceRiskCreate,
    },
    {
      path: '/client/risk/:id/edit',
      name: 'clientInsuranceRiskEdit',
      component: ClientInsuranceRiskEdit,
    },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router
