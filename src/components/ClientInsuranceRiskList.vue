<template>
  <insurance-risk-list
    title='policies list'
    riskDetailRouteName='clientInsuranceRiskEdit'
    riskListFetchApiUrl='api/client/risk/'
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
