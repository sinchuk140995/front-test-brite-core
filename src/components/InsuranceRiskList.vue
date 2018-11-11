<template>
  <div v-loading="dataLoading">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
        <router-link style="float: right; padding: 3px 0" :to="{ name: 'insuranceRiskCreate' }" exact>Create new</router-link>
      </div>

      <div class="error" v-if="hasErrors">
        Can't load the questions
      </div>

      <div v-for="risk in risks" :key="risk.id" class="text item">
        <router-link :to="{ name: riskUrl, params: {id: risk.id} }" :key="risk.id">{{ risk.name }}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
import SwitchValues from '../mixins/SwitchValues'
export default {
  data () {
    return {
      resourceName: 'risks',
    }
  },
  mixins: [
    RemoteData('risks'),
    SwitchValues,
  ],
  created () {
    this.fetchResource(this.resourceName, this.apiUrl)
  },
  computed: {
    apiUrl () {
      return this.switchValueBasedOnRoute(
        { routeName: 'home', value: 'api/risk/' },
        { routeName: 'clientInsuranceRisks', value: 'api/client/risk/' },
      )
      // return this.switchValueBasedOnRoute('api/risk/', 'api/client/risk/')
    },
    title () {
      return this.switchValueBasedOnRoute(
        { routeName: 'home', value: 'Home' },
        { routeName: 'clientInsuranceRisks', value: 'Owned risks' },
      )
      // return this.switchValueBasedOnRoute('Home', 'Owned risks')
    },
    riskUrl () {
      return this.switchValueBasedOnRoute(
        { routeName: 'home', value: 'insuranceRiskTake' },
        { routeName: 'clientInsuranceRisks', value: 'clientInsuranceRiskEdit' },
      )
      // return this.switchValueBasedOnRoute('insuranceRiskTake', 'clientInsuranceRiskEdit')
    }
  },
  watch: {
    apiUrl () {
      this.fetchResource(this.resourceName, this.apiUrl)
    }
  },
  methods: {
    // switchValueBasedOnRoute (homeValue, clientValue) {
    //   switch (this.$route.name) {
    //     case 'home': return homeValue
    //     case 'clientInsuranceRisks': return clientValue
    //   }
    // },
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
