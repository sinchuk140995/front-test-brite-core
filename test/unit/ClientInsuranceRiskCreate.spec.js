import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResourceMock from 'vue-resource-mock'
import InsuranceRiskForm from '../../src/components/InsuranceRiskForm.vue'
import ClientInsuranceRiskCreate from '../../src/components/ClientInsuranceRiskCreate.vue'
import MockData from './MockData'
import router from '../../src/router'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueResourceMock, MockData, /* { silent: true/false } */)


describe('ClientInsuranceRiskCreate.vue', () => {

  it('submits a form', (done) => {
    const wrapper = mount(ClientInsuranceRiskCreate, {
      router: router,
      children: [InsuranceRiskForm],
    })
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.$children[0].insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          inputWrapper.setValue(textFieldValue)
        }
        else if (riskField.field_type === 'number') {
          riskField.value = numberFieldValue
        }
        else if (riskField.field_type === 'select') {
          let firstOption = riskField.options[0]
          riskField.select_option = firstOption.id
        }
      }
      wrapper.find('#submit-form-btn').trigger('click')
      expect(wrapper.vm.$children[0].errors).to.be.empty
      done()
    }, 100)


  }),

  it('displays a empty text field error after form submitting', (done) => {
    const wrapper = mount(ClientInsuranceRiskCreate, {
      router: router,
      children: [InsuranceRiskForm],
    })
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.$children[0].insuranceRisk.fields) {
        if (riskField.field_type === 'number') {
          riskField.value = numberFieldValue
        }
        else if (riskField.field_type === 'select') {
          let firstOption = riskField.options[0]
          riskField.select_option = firstOption.id
        }
      }
      wrapper.find('#submit-form-btn').trigger('click')
      expect(wrapper.vm.$children[0].errors).to.not.be.empty
      done()
    }, 100)
  }),

  it('displays a empty number field error after form submitting', (done) => {
    const wrapper = mount(ClientInsuranceRiskCreate, {
      router: router,
      children: [InsuranceRiskForm],
    })
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.$children[0].insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          inputWrapper.setValue(textFieldValue)
        }
        else if (riskField.field_type === 'select') {
          let firstOption = riskField.options[0]
          riskField.select_option = firstOption.id
        }
      }
      wrapper.find('#submit-form-btn').trigger('click')
      expect(wrapper.vm.$children[0].errors).to.not.be.empty
      done()
    }, 100)
  }),

  it('displays a empty select field error after form submitting', (done) => {
    const wrapper = mount(ClientInsuranceRiskCreate, {
      router: router,
      children: [InsuranceRiskForm],
    })
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.$children[0].insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          inputWrapper.setValue(textFieldValue)
        }
        else if (riskField.field_type === 'number') {
          riskField.value = numberFieldValue
        }
      }
      wrapper.find('#submit-form-btn').trigger('click')
      expect(wrapper.vm.$children[0].errors).to.not.be.empty
      done()
    }, 100)
  })


})
