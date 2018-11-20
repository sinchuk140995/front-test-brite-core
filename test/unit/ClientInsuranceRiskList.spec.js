import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResourceMock from 'vue-resource-mock'
import MockData from './MockData'
import ClientInsuranceRiskList from '../../src/components/ClientInsuranceRiskList'
import InsuranceRiskList from '../../src/components/InsuranceRiskList'
import router from '../../src/router'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueResourceMock, MockData, /* { silent: true/false } */)


describe('ClientInsuranceRiskList.vue', () => {
  it('renders props.title', (done) => {
    const wrapper = mount(ClientInsuranceRiskList, {
      router: router,
      children: [InsuranceRiskList],
    })
    setTimeout(() => {
      expect(wrapper.find('#title-risk').text()).to.not.be.empty
      done()
    }, 100)
  }),

  it('renders insurance risks', (done) => {
    const wrapper = mount(ClientInsuranceRiskList, {
      router: router,
      children: [InsuranceRiskList],
    })
    setTimeout(() => {
      console.log(wrapper.vm.$children[0].insuranceRisks.length)
      expect(wrapper.vm.$children[0].insuranceRisks.length).to.not.equal(0)
      done()
    }, 100)
  })

})