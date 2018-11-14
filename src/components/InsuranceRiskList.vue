<template>
  <div v-loading="loading">
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
import GetData from '../mixins/GetData'
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
    GetData('insuranceRisks')
  ],
  created () {
    this.fetchResource(this.riskListFetchApiUrl)
  },
  computed: {
    loading () {
      return this.loadingData
    },
    hasErrors () {
      return this.hasLoadingErrors
    },
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
