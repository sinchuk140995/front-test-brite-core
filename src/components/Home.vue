<template>
  <insurance-risk-list
    title='RISK TYPES'
    riskDetailRouteName='insuranceRiskTake'
    riskListFetchApiUrl='api/risk/'
    addNewTypeBtnText='Add new risk type'
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
