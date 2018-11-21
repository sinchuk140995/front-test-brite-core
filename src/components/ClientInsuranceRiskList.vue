<template>
  <insurance-risk-list
    title='POLICIES LIST'
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
