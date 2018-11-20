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
  const wrapper = factory()
  it('renders props.title when passed', (done) => {
    // wrapper.vm.$nextTick(() => {
    //     expect(wrapper.find('span').text()).to.equal(testTitle)
    //     done()
    // })
    setTimeout(() => {
      expect(wrapper.find('#title-risk').text()).to.not.be.empty
      done()
    }, 100)
  }),

  it('makes API call by props.riskListFetchApiUrl getting insurance risks', (done) => {
    setTimeout(() => {
      expect(wrapper.vm.insuranceRisks.length).to.not.equal(0)
      done()
    }, 100)
  }),

  it('renders insurance risk links', (done) => {
    setTimeout(() => {
      expect(wrapper.contains('.link')).to.equal(true)
      done()
    }, 100);
  })

})
