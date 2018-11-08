<template>
  <div v-loading="dataLoading">
    <h1>All insurance risks</h1>

    <div class="error" v-if="hasErrors">
      Can't load the insurance risks
    </div>

    <InsuranceRiskItem v-for="risk in risks" :name="risk.name" :key="risk.id" :id="risk.id" :urlName="urlName"></InsuranceRiskItem>
  </div>
</template>

<script>
import InsuranceRiskItem from './InsuranceRiskItem'
import RemoteData from '../mixins/RemoteData'
export default {
  data () {
    return {
      urlName: 'clientInsuranceRiskAdd',
      // risks: [],
      // error: null,
      // loading: false,
    }
  },
  components: {
    InsuranceRiskItem
  },
  mixins: [
    RemoteData({
      risks: 'api/risk/'
    }),
  ],
  // created () {
  //   this.loading = true
  //   this.$http.get('http://127.0.0.1:8000/api/risk/').then(
  //     response => {
  //       this.risks = response.body
  //       this.loading = false
  //     },
  //     error => {
  //       this.error = error
  //       this.loading = false
  //     }
  //   )
  // },
}
</script>

<style></style>
