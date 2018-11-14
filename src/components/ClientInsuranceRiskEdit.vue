<template>
  <insurance-risk
    mode="edit"
    :riskFetchApiUrl='riskFetchApiUrl'
    :riskPushApiUrl='riskEditApiUrl'>
  </insurance-risk>
</template>

<script>
import InsuranceRisk from './InsuranceRisk'
export default {
  components: {
    InsuranceRisk,
  },
  computed: {
    clientInsuranceRiskId () {
        return this.$route.params.id
    },
    riskFetchApiUrl () {
        return `api/client/risk/${this.clientInsuranceRiskId}/`
    },
    riskEditApiUrl () {
        return `api/client/risk/${this.clientInsuranceRiskId}/edit/`
    },
  }
}
</script>
