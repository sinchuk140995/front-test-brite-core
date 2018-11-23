<template>
  <insurance-risk-list
    title='risk types'
    riskDetailRouteName='clientInsuranceRiskCreate'
    riskListFetchApiUrl='api/risk/'
    addNewTypeBtnText='Add new risk type'
    riskEditRouteName='insuranceRiskEdit'
  >
  </insurance-risk-list>
</template>

<script>
import InsuranceRiskList from './InsuranceRiskList'
export default {
  components: {
    InsuranceRiskList
  }
}
</script>
