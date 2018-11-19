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


const riskId = 16
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
  it("sends client's insurance risk data to API", (done) => {
    const wrapper = factory()

    setTimeout(() => {
      // console.log(wrapper.html())
      for (let riskField of wrapper.vm.insuranceRisk.fields) {
        if (riskField.field_type === 'text') {
          let inputWrapper = wrapper.find(`#input-text-${riskField.id}`)
          inputWrapper.setValue('Text field')

          // riskField.value = 'Text field'
        }
        else if (riskField.field_type === 'number') {
          let inputDiv = wrapper.find(`#input-number-${riskField.id}`)
          let inputWrapper = inputDiv.find('.el-input > input')
          console.log(inputWrapper.attributes())
          inputWrapper.setValue(1)

          // riskField.value = 1
        }
        else if (riskField.field_type === 'select') {
          let firstOption = riskField.options[0]
          let inputWrapper = wrapper.find(`#input-select-${riskField.id}-option-${firstOption.id}`)
          inputWrapper.setSelected()

          // riskField.select_option = firstOption.id
        }
      }

      wrapper.find('#submitFormBtn').trigger('click')

      setTimeout(() => {
        expect(wrapper.contains('.is-error')).to.equal(false)
      }, 100)

      done()
    }, 100)


  })

})
