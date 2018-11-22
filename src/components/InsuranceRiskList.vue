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
        class="text item"
      >
        <router-link
          class="link"
          :to="{ name: riskDetailRouteName, params: {id: risk.id} }"
          :key="risk.id"
        >
          {{ risk.name }}
        </router-link>
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
  },
  mixins: [
    GetData('insuranceRisks'),
    DeleteData('insuranceRisks'),
  ],
  methods: {
    goTo(pathName) {
      this.$router.push({ name: 'insuranceRiskCreate' });
    },
    deleteInsuranceRisk(arrayIndex) {
      this.deleteResource(arrayIndex, this.riskListFetchApiUrl)
    }
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

  .item {
    display: flex;
    margin-bottom: 0;
  }

  .el-icon-delete {
    display: block;
    padding: 15px;
    border-bottom: 1px solid #ddd;
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

  .el-card__body {
    padding: 0;
  }

  .link {
    flex: 1;
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    transition: background-color 300ms;
  }

  .link:hover {
    background-color: #ddd;
  }
</style>
