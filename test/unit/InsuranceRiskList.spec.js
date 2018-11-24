import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResourceMock from 'vue-resource-mock'
import InsuranceRiskList from '../../src/components/InsuranceRiskList'
import MockData from './MockData'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueResourceMock, MockData, /* { silent: true/false } */)


const testTitle = 'Some title'
const testRouteName = 'insuranceRiskTake'
const testApiUrl = 'api/risk/'
const factory = (propsData) => {
  return shallowMount(InsuranceRiskList, {
    propsData: {
      title: testTitle,
      riskDetailRouteName: testRouteName,
      riskListFetchApiUrl: testApiUrl,
      ...propsData
    }
  })
}


describe('InsuranceRiskList.vue', () => {
  it('renders a props.title when passed', (done) => {
    const wrapper = factory()
    setTimeout(() => {
      expect(wrapper.find('#title-risk').text()).to.not.be.empty
      done()
    }, 100)
  }),

  it('makes API call by a props.riskListFetchApiUrl getting insurance risks', (done) => {
    const wrapper = factory()
    setTimeout(() => {
      expect(wrapper.vm.insuranceRisks.length).to.not.equal(0)
      done()
    }, 100)
  }),

  it('renders insurance risk links', (done) => {
    const wrapper = factory()
    setTimeout(() => {
      expect(wrapper.contains('.row-item')).to.equal(true)
      done()
    }, 100);
  }),

  it('removes a insurance risk', (done) => {
    const wrapper = factory()
    setTimeout(() => {
      const riskLengthBeforeDelete = wrapper.vm.insuranceRisks.length
      wrapper.find('#risk-delete-link-0').trigger('click')
      setTimeout(() => {
        expect(wrapper.vm.insuranceRisks).to.have.lengthOf(riskLengthBeforeDelete - 1)
      }, 100)
      done()
    }, 100);
  })

})
