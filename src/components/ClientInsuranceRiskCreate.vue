<template>
  <insurance-risk-form
    mode="create"
    :riskFetchApiUrl="riskFetchApiUrl"
    riskPushApiUrl="api/client/risk/create/">
  </insurance-risk-form>
</template>

<script>
import InsuranceRiskForm from './InsuranceRiskForm'
export default {
  components: {
    InsuranceRiskForm,
  },
  computed: {
    insuranceRiskId () {
        return this.$route.params.id || 1
    },
    riskFetchApiUrl () {
        return `api/risk/${this.insuranceRiskId}/`
    },
  }
}
</script>
