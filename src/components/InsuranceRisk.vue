<template>
  <div v-loading="dataLoading">
    <h2>{{risk.name}}</h2>
    <h3>Fields</h3>
    <el-form>
      <el-form-item v-for="field in risk.client_fields" :key="field.id" :label="field.name">
        <el-input v-if="field.field_type === 'text'" :name="field.name" v-model="field.value">
        </el-input>
        <el-input-number v-else-if="field.field_type === 'number'" :name="field.name" v-model="field.value" :min="0">
        </el-input-number>
        <el-select v-else-if="field.field_type === 'select'" :placeholder="field.name" v-model="field.select_option">
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
    }
  },
  mixins: [
    RemoteData('risk'),
    SwitchValues,
  ],
  created () {
    this.fetchResource('risk', this.fetchApiUrl)
  },
  computed: {
    riskId () {
      return this.$route.params.id
    },
    fetchApiUrl () {
      return this.switchValueBasedOnRoute(
        {
          routeName: 'insuranceRiskTake',
          value: `api/risk/${this.riskId}/`,
        },
        {
          routeName: 'clientInsuranceRiskEdit',
          value: `api/client/risk/${this.riskId}/`,
        },
      )
    },
    pushApiUrl () {
      return this.switchValueBasedOnRoute(
        {
          routeName: 'insuranceRiskTake',
          value: 'api/client/risk/create/',
        },
        {
          routeName: 'clientInsuranceRiskEdit',
          value: `api/client/risk/${this.riskId}/edit/`,
        },
      )
    },
  },
  methods: {
    sendRisk () {
      if (this.$route.name === 'insuranceRiskTake') {
        this.pushResource('risk', this.pushApiUrl)
      }
      else if (this.$route.name === 'clientInsuranceRiskEdit') {
        this.updateResource('risk', this.pushApiUrl)
      }
    }
  },
}
</script>

<style>
</style>
