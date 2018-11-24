import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResourceMock from 'vue-resource-mock'
import InsuranceRiskEdit from '../../src/components/InsuranceRiskEdit'
import MockData from './MockData'
import router from '../../src/router'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueResourceMock, MockData, true)


describe('InsuranceRiskEdit.vue', () => {
  it('removes a insurance risk field', (done) => {
    const wrapper = mount(InsuranceRiskEdit, {
      router: router,
    })
    setTimeout(() => {
      const fieldsLengthBeforeDelete = wrapper.vm.insuranceRisk.fields.length
      wrapper.find('#field-delete-link-0').trigger('click')
      setTimeout(() => {
        expect(wrapper.vm.insuranceRisk.fields).to.have.lengthOf(fieldsLengthBeforeDelete - 1)
      }, 100)
      done()
    }, 100);
  })

})
