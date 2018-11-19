import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import InsuranceRiskList from '../../src/components/InsuranceRiskList.vue'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)


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
  it('renders props.title when passed', () => {
    const wrapper = factory()
    expect(wrapper.find('span').text()).to.equal(testTitle)
  }),

  it('makes API call by props.riskListFetchApiUrl getting insurance risks', (done) => {
    const wrapper = factory()
    // wrapper.vm.$nextTick(() => {
    //   console.log(wrapper.vm.insuranceRisks)
    //   done()
    // })
    setTimeout(() => {
      expect(wrapper.vm.insuranceRisks.lenght).to.not.equal(0)
      done()
    }, 100);
  }),

  it('renders insurance risk links', (done) => {
    const wrapper = factory()
    setTimeout(() => {
      expect(wrapper.contains('.link')).to.equal(true)
      done()
    }, 100);
  })

})
