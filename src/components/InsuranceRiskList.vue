<template>
  <div v-loading="dataLoading">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ title }}</span>
        <router-link style="float: right; padding: 3px 0" :to="{ name: 'insuranceRiskCreate' }" exact>Create new</router-link>
      </div>

      <div class="error" v-if="hasErrors">
        Can't load the questions
      </div>

      <div v-for="risk in insuranceRisks" :key="risk.id" class="text item">
        <router-link :to="{ name: riskDetailRouteName, params: {id: risk.id} }" :key="risk.id">{{ risk.name }}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import GetRemoteData from '../mixins/GetRemoteData'
export default {
  data () {
    return {
      insuranceRisks: [],
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    riskDetailRouteName: {
      type: String,
      required: true,
    },
    riskListFetchApiUrl: {
      type: String,
      required: true,
    },
  },
  mixins: [
    GetRemoteData('insuranceRisks')
  ],
  created () {
    console.log(this.riskListFetchApiUrl)
    this.fetchResource(this.riskListFetchApiUrl)
  },

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
