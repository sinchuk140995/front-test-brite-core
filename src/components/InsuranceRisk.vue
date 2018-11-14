<template>
  <div v-loading="dataLoading">
    <h2>{{ insuranceRisk.name }}</h2>
    <h3>Fields</h3>
    <el-form>
      <el-form-item v-for="field in insuranceRisk.client_fields" :key="field.id" :label="field.name">
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
import GetRemoteData from '../mixins/GetRemoteData'
import PostData from '../mixins/PostData'
export default {
  data () {
    return {
      insuranceRisk: {},
    }
  },
  props: {
    mode: {
      validator: function (value) {
        return ['create', 'edit'].indexOf(value) !== -1
      }
    },
    riskFetchApiUrl: {
      type: String,
      required: true,
    },
    riskPushApiUrl: {
      type: String,
      required: true,
    },
  },
  mixins: [
    GetRemoteData('insuranceRisk'),
    PostData('insuranceRisk'),
  ],
  created () {
    this.fetchResource(this.riskFetchApiUrl)
  },
  methods: {
    sendRisk () {
      if (this.mode === 'create') {
        this.postResource(this.riskPushApiUrl)
      } else if (this.mode === 'edit') {
        this.patchResource(this.riskPushApiUrl)
      }
    }
  },
}
</script>

<style>
</style>
