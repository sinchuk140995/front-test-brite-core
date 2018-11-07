<template>
  <div>
    <h2>{{name}}</h2>
    <h3>Fields</h3>
    <ul>
      <div v-for="field in fields">
        <input type="text" name="field.name" v-model="field.value" />
        <li :key="field.id">{{field.name}} | {{field.value}}</li>
      </div>
    </ul>
  </div>
</template>

<script>


export default {
  // name: 'insurance-risk',
  // components: {
  //   InsuranceRisk
  // },
  // props: {
  //   name: {
  //     type: String
  //   }
  // },
  data () {
    return {
      name: 'Insurance risk',
      fields: [
        { id: 1, name: 'Field 1', value: 'Value 1' },
        { id: 2, name: 'Field 2', value: 'Value 2' },
        { id: 3, name: 'Field 3', value: 'Value 3' },
        { id: 4, name: 'Field 4', value: 'Value 4' },
        { id: 5, name: 'Field 5', value: 'Value 5' },
      ]
    }
  },
}
</script>

<style>
</style>
