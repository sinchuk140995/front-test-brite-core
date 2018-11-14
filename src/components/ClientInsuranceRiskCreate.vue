<template>
  <insurance-risk
    mode="create"
    :riskFetchApiUrl="riskFetchApiUrl"
    riskPushApiUrl="api/client/risk/create/">
  </insurance-risk>
</template>

<script>
import InsuranceRisk from './InsuranceRisk'
export default {
  components: {
    InsuranceRisk,
  },
  computed: {
    insuranceRiskId () {
        return this.$route.params.id
    },
    riskFetchApiUrl () {
        return `api/risk/${this.insuranceRiskId}/`
    },
  }
}
</script>
