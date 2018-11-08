<template>
  <div>
    <div v-loading="dataLoading"></div>
    <h1>Client insurance risks</h1>

    <div class="error" v-if="hasErrors">
      Can't load the questions
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
      urlName: 'clientInsuranceRiskEdit',
    }
  },
  components: {
    InsuranceRiskItem
  },
  mixins: [
    RemoteData({
      risks: 'api/client/risk/'
    }),
  ],
}
</script>

<style></style>
