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
        <span class="box-row-item"><i>Name:</i> {{ field.name }}</span>
        <span class="box-row-item"><i>Type:</i> {{ field.field_type }}</span>

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
    let riskDetailApiUrl = `api/risk/${this.riskId}/`
    this.fetchResource(riskDetailApiUrl)
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
      return this.dataLoading
    },
    hasErrors () {
      return this.hasLoadingErrors
    },
    riskId () {
      return this.$route.params.id
    },
  },
}
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header .el-button {
    margin-left: auto;
  }

  .header-title {
    margin-right: 30px;
    text-transform: uppercase;
  }

  .text {
    font-size: 14px;
  }

  .box-row {
    display: flex;
    margin-bottom: 0;
  }

  .box-row:hover {
    background-color: #ddd;
  }


  .el-icon-delete {
    display: block;
    padding: 15px 5px 15px 5px;
    border-bottom: 1px solid #ddd;
  }

  .el-icon-delete:hover {
    background-color: #EF7C1B;
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
    max-width: calc(100vw - 20px);
  }

  .box-row-item {
    flex: 1;
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    transition: background-color 300ms;
  }

</style>
