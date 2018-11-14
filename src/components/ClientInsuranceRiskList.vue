<template>
  <insurance-risk-list
    title='Owned insurance risks'
    riskDetailRouteName='clientInsuranceRiskEdit'
    riskListFetchApiUrl='api/client/risk/'>
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
