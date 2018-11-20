import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResourceMock from 'vue-resource-mock'
import InsuranceRiskForm from '../../src/components/InsuranceRiskForm.vue'
import MockData from './MockData'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueResourceMock, MockData, /* { silent: true/false } */)


const testmode = 'create'
const testFetchApiUrl = 'api/risk/1/'
const testPushApiUrl = 'api/client/risk/create/'
const factory = (propsData) => {
  return mount(InsuranceRiskForm, {
    propsData: {
      mode: testmode,
      riskFetchApiUrl: testFetchApiUrl,
      riskPushApiUrl: testPushApiUrl,
      ...propsData
    }
  })
}


describe('InsuranceRiskForm.vue', () => {
  // const wrapper = factory()

  it('submits a form', (done) => {
    const wrapper = factory()
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          inputWrapper.setValue(textFieldValue)
        }
        else if (riskField.field_type === 'number') {
          // let inputDiv = wrapper.find(`#input-number-${riskField.id}`)
          // let inputWrapper = inputDiv.find('.el-input > input')
          // inputWrapper.setValue(numberFieldValue)   // doesn't work with ElementUI components: value is stored in aria-valuenow
          riskField.value = numberFieldValue
        }
        else if (riskField.field_type === 'select') {
          let firstOption = riskField.options[0]
          // let inputWrapper = wrapper.find(`#input-select-${riskField.id}-option-${firstOption.id}`)
          // inputWrapper.setSelected()   // doesn't work with ElementUI components: wrapper.setSelected() cannot be called on this element
          riskField.select_option = firstOption.id
        }
      }
      wrapper.find('#submit-form-btn').trigger('click')
      expect(wrapper.vm.errors).to.be.empty
      done()
    }, 100)


  }),

  it('displays a empty text field error after form submitting', (done) => {
    const wrapper = factory()
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          // inputWrapper.setValue(textFieldValue)
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
      expect(wrapper.vm.errors).to.not.be.empty
      done()
    }, 100)
  }),

  it('displays a empty number field error after form submitting', (done) => {
    const wrapper = factory()
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          inputWrapper.setValue(textFieldValue)
        }
        else if (riskField.field_type === 'number') {
          // riskField.value = numberFieldValue
        }
        else if (riskField.field_type === 'select') {
          let firstOption = riskField.options[0]
          riskField.select_option = firstOption.id
        }
      }
      wrapper.find('#submit-form-btn').trigger('click')
      expect(wrapper.vm.errors).to.not.be.empty
      done()
    }, 100)
  }),

  it('displays a empty select field error after form submitting', (done) => {
    const wrapper = factory()
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      for (let riskField of wrapper.vm.insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          inputWrapper.setValue(textFieldValue)
        }
        else if (riskField.field_type === 'number') {
          riskField.value = numberFieldValue
        }
        else if (riskField.field_type === 'select') {
          // let firstOption = riskField.options[0]
          // riskField.select_option = firstOption.id
        }
      }
      wrapper.find('#submit-form-btn').trigger('click')
      expect(wrapper.vm.errors).to.not.be.empty
      done()
    }, 100)
  })


})
