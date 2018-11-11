<template>
  <div>
    <h2>{{name}}</h2>
    <h3>Fields</h3>
    <el-form>
      <el-form-item v-for="field in fields" :label="field.name">
        <el-input v-if="field.type === 'text'" :name="field.name" v-model="field.value">
        </el-input>
        <el-input-number v-else-if="field.type === 'number'" :name="field.name" v-model="field.value" :min="0">
        </el-input-number>
        <el-select v-else-if="field.type === 'select'" v-model="field.value">
          <el-option v-for="option in field.values" :value="option">{{ option }}</el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import insuranceRisk from '../mixins/insuranceRisk';

export default {
  mixins: [ insuranceRisk() ],
  data () {
    return {
      name: 'Insurance risk',
    }
  },
}
</script>

<style>
</style>
