<template>
    <ul>
      <h2>{{name}}</h2>
      <li v-for="risk in risks">{{risk.name}}</li>
    </ul>
</template>

<script>
export default {
  name: 'insurance-risks',
  // props: {
  //   name: {
  //     type: String,
  //   }
  // },
  data () {
    return {
      name: 'Insurance risks',
      risks: [
        { name: 'Insurance 1' },
        { name: 'Insurance 2' },
        { name: 'Insurance 3' },
        { name: 'Insurance 4' },
        { name: 'Insurance 5' },
      ]
    }
  },
}
</script>

<style>
</style>
