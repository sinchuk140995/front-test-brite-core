import { expect } from 'chai'
// import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import InsuranceRiskForm from '../../src/components/InsuranceRiskForm.vue'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)


const riskId = 20
const testmode = "create"
const testFetchApiUrl = `api/risk/${riskId}/`
const testPushApiUrl = "api/client/risk/create/"
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
  it("submits a form", (done) => {
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

      setTimeout(() => {
        expect(wrapper.vm.errors).to.be.empty
      }, 100)

      done()
    }, 100)


  }),

it('displays errors about empty fields', (done) => {
    const wrapper = factory()
    const textFieldValue = 'Some data'
    const numberFieldValue = 1

    setTimeout(() => {
      wrapper.find('#submit-form-btn').trigger('click')

      setTimeout(() => {
        let errorKeys = Object.keys(wrapper.vm.errors)
        let riskFieldNames = wrapper.vm.insuranceRisk.fields.map(el => el.name)
        expect(errorKeys).to.eql(riskFieldNames)
      }, 100)

      done()
    }, 100)


  })


})
