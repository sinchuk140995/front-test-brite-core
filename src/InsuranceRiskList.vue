<template>
  <ul>
    <h1>{{name}}</h1>
    <insurance-risk name="Insurance 1"></insurance-risk>
  </ul>
</template>

<script>
import InsuranceRisk from './InsuranceRisk.vue'


export default {
  name: 'insurance-risk-list',
  components: {
    InsuranceRisk
  },
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
    }
  },
}
</script>

<style>
</style>
