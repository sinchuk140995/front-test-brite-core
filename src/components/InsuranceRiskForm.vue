<template>
  <div v-loading="loading">
    <h2>{{ insuranceRisk.name }}</h2>
    <h3>Fields</h3>
    <el-form
      label-width="120px"
    >

      <el-form-item
        v-for="(field, index) in insuranceRisk.fields"
        :label="field.name"
        :key="field.id"
        :error="errors[field.name] || uploadingErrors[field.name]"
      >
        <el-input
          v-if="field.field_type === 'text'"
          :name="field.name"
          v-model="field.value"
        >
        </el-input>

        <el-input-number
          v-else-if="field.field_type === 'number'"
          :name="field.name"
          v-model="field.value"
          :min="0"
        >
        </el-input-number>

        <el-select
          v-else-if="field.field_type === 'select'"
          :placeholder="field.name"
          v-model="field.select_option"
        >

          <el-option
            v-for="option in field.options"
            :key="option.id"
            :label="option.name"
            :value="option.id"
          >
            {{ option.name }}
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item>
        <el-button
          icon="el-icon-circle-plus-outline"
          type="submit"
          @click="submitForm()"
        >
          Save
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import GetData from '../mixins/GetData'
import PostPatchData from '../mixins/PostPatchData'
import FieldValidation from '../mixins/FieldValidation'
export default {
  data () {
    return {
      insuranceRisk: {},
      errors: {},
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
    GetData('insuranceRisk'),
    PostPatchData('insuranceRisk'),
    FieldValidation,
  ],
  created () {
    this.fetchResource(this.riskFetchApiUrl)
  },
  methods: {
    submitForm () {
      let formIsValid = this.checkForm()
      if (!formIsValid) {
        return
      }
      if (this.mode === 'create') {
        this.postResource(this.riskPushApiUrl)
      } else if (this.mode === 'edit') {
        this.patchResource(this.riskPushApiUrl)
      }
    },
    checkForm () {
      this.errors = {}

      for (let field of this.insuranceRisk.fields) {
        if (field.field_type === 'select') {
          if (this.fieldIsRequired(field, 'select_option', 'name', 'errors')) {
            continue
          }
        }
        else if (field.field_type === 'number') {
          if (this.fieldIsRequired(field, 'value', 'name', 'errors')) {
            continue
          }
        }
        else if (field.field_type === 'text') {
          if (this.fieldIsRequired(field, 'value', 'name', 'errors')) {
            continue
          }

          if (field['value'].length < 2) {
            this.errors[field.name] = 'This field should contain minimum 2 symbols.'
          }
        }
      }
      return Object.values(this.errors).length === 0
    },
  },
  computed: {
    loading () {
      return this.loadingData || this.uploadingData
    },
    hasErrors () {
      return this.hasLoadingErrors || this.hasUploadingErrors
    },
  },
  watch: {
    insuranceRisk () {
      for (let field of this.insuranceRisk.fields) {
        this.errors[field.name] = ''
      }
    },
  }
}
</script>

<style>
</style>
