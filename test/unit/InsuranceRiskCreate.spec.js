import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import InsuranceRiskCreate from '../../src/components/InsuranceRiskCreate.vue'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)


describe('InsuranceRiskCreate.vue', () => {
  it('displays a error about insufficient number of fields', (done) => {
    const wrapper = mount(InsuranceRiskCreate)
    const riskName = 'Risk name'
    setTimeout(() => {
      wrapper.find('#risk-name-input').setValue(riskName)
      wrapper.find('#submit-form').trigger('click')

      setTimeout(() => {
        expect(wrapper.vm.errors).to.have.property('fieldsLength')
      }, 200)

      done()
    }, 200)
  }),

  it('displays errors about empty the name field', (done) => {
    const wrapper = mount(InsuranceRiskCreate)
    setTimeout(() => {
      wrapper.find('#submit-form').trigger('click')

      setTimeout(() => {
        expect(wrapper.vm.errors).to.have.property('riskName')
      }, 200)

      done()
    }, 200)
  }),

  it('displays errors about empty a risk field', (done) => {
    const wrapper = mount(InsuranceRiskCreate)
    const riskName = 'Risk name'
    const riskFieldValue = 'Risk field 1'
    const fieldId = '0'
    setTimeout(() => {
      wrapper.find('#risk-name-input').setValue(riskName)
      wrapper.find('#add-field-btn').trigger('click')
      wrapper.find('#submit-form').trigger('click')

      setTimeout(() => {
        expect(wrapper.vm.errors).to.have.property(fieldId)
      }, 200)

      done()
    }, 200)
  }),

  it('submits a risk form', (done) => {
    const wrapper = mount(InsuranceRiskCreate)
    const riskName = 'Risk name'
    const riskFieldValue = 'Risk field 1'
    const fieldId = '0'
    setTimeout(() => {
      wrapper.find('#risk-name-input').setValue(riskName)
      wrapper.find('#add-field-btn').trigger('click')

      wrapper.find(`#risk-field-name-${fieldId}`).setValue(riskFieldValue)
      wrapper.find('#submit-form').trigger('click')

      setTimeout(() => {
        expect(wrapper.vm.errors).to.be.empty
      }, 200)

      done()
    }, 200)
  })

})
