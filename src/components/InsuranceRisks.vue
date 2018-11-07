<template>
  <ul>
    <h1>Insurance risks</h1>

    <div class="error" v-if="error">
      Can't load the insurance risks
    </div>

    <li v-for="risk in risks" :key="risk.id">
      <router-link :to="{ name: 'risk' }">{{risk.name}}</router-link>
    </li>
  </ul>
</template>

<script>


export default {
  data () {
    return {
      risks: [],
      error: null,
    }
  },
  created () {

    this.$http.get('http://127.0.0.1:8000/api/risk/').then(response => {
      this.risks = response.body;
    }, error => {
      this.error = error;
    })

  },
}
</script>

<style>
</style>
