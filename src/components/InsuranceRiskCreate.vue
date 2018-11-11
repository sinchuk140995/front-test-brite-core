<template>
  <el-form label-width="120px">
      <el-form-item label="Name">
          <el-input type="text" name="name" v-model="name">
          </el-input>
      </el-form-item>
      <el-row>
        <h4>Fields</h4>
      </el-row>
      <el-form-item v-for="field in fields" :key="field.id">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="11">
            <el-input type="text" placeholder="Name" v-model="field.name"></el-input>
          </el-col>
          <el-col :span="11">
            <el-select @change="fieldChange(field)" v-model="field.type">
              <el-option v-for="type in types" :key="type.id" :value="type.htmlName" :label="type.name"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row v-if="field.type === 'select'">
          <el-col :span="12" v-for="(option, index) in field.options" :key="index">
            <el-input type="text" placeholder="Options" v-model="field.options[index]"></el-input>
          </el-col>

          <el-button @click="addOption(field)">Add option</el-button>
        </el-row>

      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-circle-plus-outline" type="primary" @click="addField">
            Add field
        </el-button>
        <el-button icon="el-icon-circle-plus-outline" type="success" @click="sendRisk">
            Save
        </el-button>
      </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'InsuranceRiskCreate',
        data() {
            return {
              types: [
                { id: 1, name: 'String', htmlName: 'text' },
                { id: 2, name: 'Number', htmlName: 'number' },
                { id: 3, name: 'Enum', htmlName: 'select' }
              ],
              name: '',
              fields: [],
            }
        },
        methods: {
          addField( ) {
            this.fields.push({
              name: '',
              type: 'text',
            })
          },
          fieldChange(field) {
            if (field.type === 'select') {
              this.$set(field, 'options', ['']);
            }
          },
          addOption(field) {
            if (!field.options) {
              this.$set(field, 'options', ['']);
            } else {
              field.options.push('');
            }
          },
          sendRisk() {
            let data = {
              name: this.name,
              fields: this.fields,
            }
            this.$http.post('http://localhost:8000/api/risk/create/', data)
              .then(({data}) => {

              })
              .catch((error) => {

              })
          },
        },
    }
</script>
