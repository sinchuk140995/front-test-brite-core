export default {
  methods: {
    goTo(pathName, params={}) {
      this.$router.push({ name: pathName, params: params });
    },
  }
}
