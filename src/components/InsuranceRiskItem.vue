<template>
  <div>
    <router-link :to="{ name: urlName, params: {id: id} }">{{ name }}</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    urlName: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
</style>
