<template>
  <el-form
    label-width="120px"
  >
    <el-form-item
      label="Name"
      :error="errors['riskName']"
    >
      <el-input
        id="risk-name-input"
        type="text"
        name="name"
        v-model="insuranceRisk.name"
      >
      </el-input>
    </el-form-item>

    <el-row>
      <h4>Fields</h4>
    </el-row>
    <el-form-item
      v-for="(field, index) in insuranceRisk.fields"
      label="Name"
      :key="index"
      :error="errors[index]"
    >
      <el-row
        type="flex"
        class="row-bg"
        justify="space-around"
      >
        <el-col>
          <el-input
            :id="`risk-field-name-${index}`"
            type="text"
            placeholder="Name"
            v-model="field.name"
          >
          </el-input>
        </el-col>
        <el-col class="type-column">
          <el-form-item
            label="Type"
          >
            <el-select
              @change="fieldChange(field)"
              v-model="field.field_type"
            >
              <el-option
                v-for="(type, index) in types"
                :key="index"
                :value="type.htmlName"
                :label="type.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row
        v-if="field.field_type === 'select'"
      >
        <el-form-item
          class="option"
          v-for="(option, optionIndex) in field.options"
          :key="optionIndex"
          :error="errors[index + '-option-' + optionIndex]"
        >
          <el-input
            type="text"
            placeholder="Options"
            v-model="field.options[optionIndex]['name']"
          >
          </el-input>
          <el-button v-if="optionIndex === field.options.length - 1" icon="el-icon-plus" circle type="info" @click="addOption(field)"></el-button>
        </el-form-item>


      </el-row>
    </el-form-item>

    <el-form-item>
      <el-button
        id="add-field-btn"
        icon="el-icon-circle-plus-outline"
        type="primary"
        @click="addField"
      >
        Add field
      </el-button>
      <el-button
        id="submit-form-btn"
        icon="el-icon-circle-plus-outline"
        type="success"
        @click="submitForm"
      >
        Save
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import PostPatchData from '../mixins/PostPatchData'
import FieldValidation from '../mixins/FieldValidation'
export default {
  name: 'InsuranceRiskCreate',
  data() {
    return {
      types: [
        { name: 'String', htmlName: 'text' },
        { name: 'Number', htmlName: 'number' },
        { name: 'Enum', htmlName: 'select' }
      ],
      insuranceRisk: {
        name: '',
        fields: [],
      },
      errors: {},
      riskPushApiUrl: 'api/risk/create/',
    }
  },
  mixins: [
    PostPatchData('insuranceRisk', 'home'),
    FieldValidation('errors'),
  ],
  methods: {
    addField () {
      this.insuranceRisk.fields.push({
        name: '',
        field_type: 'text',
      })
    },
    addOption (field) {
      if (!field.options) {
        this.$set(field, 'options', [{ name: '' }])
      } else {
        field.options.push({ name: '' })
      }
    },
    fieldChange (field) {
      if (field.field_type === 'select') {
        this.$set(field, 'options', [{ name: '' }])
      }
    },
    submitForm () {
      let formIsValid = this.checkForm()
      if (!formIsValid) {
        return
      }
      this.postResource(this.riskPushApiUrl)
    },
    checkForm () {
      this.errors = {}
      let textMinLength = 3

      let nameOfRiskNameField = 'riskName'
      this.checkRequiredValue(this.insuranceRisk.name, nameOfRiskNameField)
      if (this.errors) {
        this.checkValueLength(this.insuranceRisk.name, nameOfRiskNameField, textMinLength)
      }

      if (this.insuranceRisk.fields.length < 1) {
        this.errors['fieldsLength'] = 'An insurance risk must contain at least 1 field'
        this.$message({
          showClose: true,
          message: this.errors['fieldsLength'],
          type: 'error'
        });
      }

      for (let i = 0; i < this.insuranceRisk.fields.length; i++) {
        let field = this.insuranceRisk.fields[i]
        this.checkRequiredDynamicField(field, i)
      }
      return Object.values(this.errors).length === 0
    },
  },
}
</script>

<style>
  .option {
    margin-top: 15px;
    width: 100%;
  }

  .el-row {
    width: 100%;
  }

  .option .el-form-item__content {
    display: flex;
    flex-wrap: nowrap;
  }

  .option .el-input {
    flex-grow: 1;
  }

  .option .el-input + .el-button {
    margin-left: 15px;
  }

  .type-column {
    margin-left: 15px;
  }
</style>
