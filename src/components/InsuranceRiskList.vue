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
          {{ title }}
        </span>
        <el-button
          v-if="addNewTypeBtnText"
          style="float: right;"
          @click="goTo('insuranceRiskCreate')"
        >
          {{ addNewTypeBtnText }}
        </el-button>
      </div>

      <div
        class="error"
        v-if="hasErrors"
      >
        Can't load the {{ title }}
      </div>

      <div
        v-for="(risk, index) in insuranceRisks"
        :key="risk.id"
        class="text box-row"
      >
        <router-link
          class="row-item"
          :to="{ name: riskDetailRouteName, params: {id: risk.id} }"
          :key="risk.id"
        >
          {{ risk.name }}
        </router-link>

        <i
          v-if="riskEditRouteName"
          :id="`risk-edit-link-${index}`"
          class="el-icon-edit"
          @click="goTo(riskEditRouteName, {id: risk.id})"
        ></i>

        <i
          :id="`risk-delete-link-${index}`"
          class="el-icon-delete"
          @click="deleteInsuranceRisk(index)"
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
    addNewTypeBtnText: {
      type: String,
    },
    riskEditRouteName: {
      type: String,
    },
  },
  mixins: [
    GetData('insuranceRisks'),
    DeleteData('insuranceRisks'),
    GoTo,
  ],
  methods: {
    deleteInsuranceRisk(arrayIndex) {
      let risk = this.insuranceRisks[arrayIndex]
      let deleteRiskApiUrl = `${this.riskListFetchApiUrl}${risk.id}/delete/`
      this.deleteResourceFromList(arrayIndex, deleteRiskApiUrl)
    },
  },
  created () {
    this.fetchResource(this.riskListFetchApiUrl)
  },
  computed: {
    loading () {
      return this.dataLoading
    },
    hasErrors () {
      return this.hasLoadingErrors
    },
  },
}
</script>

<style scoped>
</style>
