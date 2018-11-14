<template>
  <insurance-risk-list
    title='Availabale insurance risks'
    riskDetailRouteName='insuranceRiskTake'
    riskListFetchApiUrl='api/risk/'>
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
