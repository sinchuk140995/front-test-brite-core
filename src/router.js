import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import InsuranceRiskCreate from './components/InsuranceRiskCreate'
import InsuranceRiskEdit from './components/InsuranceRiskEdit'
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
      name: 'clientInsuranceRiskCreate',
      component: ClientInsuranceRiskCreate,
    },
    {
      path: '/risk/:id/edit/',
      name: 'insuranceRiskEdit',
      component: InsuranceRiskEdit,
    },
    {
      path: '/client/risk/:id/edit',
      name: 'clientInsuranceRiskEdit',
      component: ClientInsuranceRiskEdit,
    },
]

const router = new VueRouter({
    routes,
})

export default router
