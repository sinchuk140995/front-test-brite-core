<template>
  <div v-loading="dataLoading">
    <h1>Client insurance risks</h1>

    <div class="error" v-if="hasErrors">
      Can't load the questions
    </div>

     <div v-for="risk in risks">
      <router-link :to="{ name: 'clientInsuranceRiskEdit', params: {id: risk.id} }" :key="risk.id">{{ risk.name }}</router-link>
    </div>
  </div>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
export default {
  data () {
    return {
      urlName: 'clientInsuranceRiskEdit',
    }
  },
  mixins: [
    RemoteData({
      risks: 'api/client/risk/'
    }),
  ],
}
</script>

<style></style>
