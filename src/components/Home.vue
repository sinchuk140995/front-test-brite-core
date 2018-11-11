<template>
  <div v-loading="dataLoading">
    <h1>All insurance risks</h1>

    <div class="error" v-if="hasErrors">
      Can't load the insurance risks
    </div>

    <div v-for="risk in risks">
      <router-link :to="{ name: 'clientInsuranceRiskAdd', params: {id: risk.id} }" :key="risk.id">{{ risk.name }}</router-link>
    </div>

  </div>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
export default {
  data () {
    return {
      // risks: [],
      // error: null,
      // loading: false,
    }
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
