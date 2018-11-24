<template>
  <div v-loading="loading">
    <el-card
      class="box-card"
      :body-style="{ padding: '0px' }"
    >
      <div
        slot="header"
        class="header clearfix"
      >
        <span
          id="title-risk"
          class="header-title"
        >
          {{ insuranceRisk.name }}
        </span>
        <el-button
          style="float: right;"
          @click="goTo('home')"
        >
          Back
        </el-button>
      </div>

      <div
        class="error"
        v-if="hasErrors"
      >
        Can't load the risk
      </div>

      <div
        v-for="(field, index) in insuranceRisk.fields"
        :key="field.id"
        class="text box-row"
      >
        <span class="row-item"><i>Name:</i> {{ field.name }}</span>
        <span class="row-item"><i>Type:</i> {{ field.field_type }}</span>

        <i
          :id="`field-delete-link-${index}`"
          class="el-icon-delete"
          @click="deleteRiskField(index)"
        ></i>

      </div>

    </el-card>
  </div>
</template>

<script>
import GetData from '../mixins/GetData'
import DeleteData from '../mixins/DeleteData'
import GoTo from '../mixins/GoTo'
export default {
  data () {
    return {
      insuranceRisk: [],
    }
  },
  mixins: [
    GetData('insuranceRisk'),
    DeleteData('insuranceRisk.fields'),
    GoTo,
  ],
  created () {
    this.fetchResource(this.riskFetchApiUrl)
  },
  methods: {
    deleteRiskField(arrayIndex) {
      let field = this.insuranceRisk.fields[arrayIndex]
      let fieldDeleteApiUrl = `api/field/${field.id}/delete/`
      this.deleteResourceFromList(arrayIndex, fieldDeleteApiUrl)
    },
  },
  computed: {
    loading () {
      return this.dataLoading || this.dataDeleting
    },
    hasErrors () {
      return this.hasLoadingErrors
    },
    insuranceRiskId () {
        return this.$route.params.id || 1
    },
    riskFetchApiUrl () {
        return `api/risk/${this.insuranceRiskId}/`
    },
  },
}
</script>

<style scoped>
</style>
