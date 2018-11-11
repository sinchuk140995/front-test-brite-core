<template>
  <div v-loading="dataLoading">
    <h2>{{risk.name}}</h2>
    <h3>Fields</h3>
    <el-form>
      <el-form-item v-for="field in risk.fields" :key="field.id" :label="field.name" :required="true">
        <el-input v-if="field.type === 'text'" :name="field.name" v-model="field.value" :required="true">
        </el-input>
        <el-input-number v-else-if="field.type === 'number'" :name="field.name" v-model="field.value" :min="0">
        </el-input-number>
        <el-select v-else-if="field.type === 'select'" :required="true" :placeholder="field.name" v-model="field.value">
          <el-option v-for="option in field.options" :key="option.id" :label="option.name" :value="option.id">{{ option.name }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-circle-plus-outline" type="success" @click="sendRisk">
            Save
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
import SwitchValues from '../mixins/SwitchValues'
export default {
  data () {
    return {
      resourceName: 'risk',
    }
  },
  mixins: [
    RemoteData('risk'),
    SwitchValues,
  ],
  created () {
    this.fetchResource(this.resourceName, this.apiUrl)
  },
  computed: {
    riskId () {
      return this.$route.params.id
    },
    apiUrl () {
      return this.switchValueBasedOnRoute(
        { routeName: 'insuranceRiskTake', value: `api/client/risk/${this.riskId}/` },
        { routeName: 'clientInsuranceRiskEdit', value: `api/client/risk/${this.riskId}/edit/` },
      // switch (this.$route.name) {
      //   case 'insuranceRiskTake': return `api/risk/${this.riskId}/`
      //   case 'clientInsuranceRiskEdit': return `api/client/risk/${this.riskId}/edit/`
      // }
      )
    },
  },
  methods: {
    sendRisk () {
      this.pushResource(this.resourceName, this.apiUrl)
    }
  },
}
</script>

<style>
</style>
