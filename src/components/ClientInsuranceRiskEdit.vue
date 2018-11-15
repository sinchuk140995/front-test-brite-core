<template>
  <insurance-risk-form
    mode="edit"
    :riskFetchApiUrl="riskFetchApiUrl"
    :riskPushApiUrl="riskEditApiUrl">
  </insurance-risk-form>
</template>

<script>
import InsuranceRiskForm from './InsuranceRiskForm'
export default {
  components: {
    InsuranceRiskForm,
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
