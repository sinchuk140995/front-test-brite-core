export default {
  methods: {
    switchValueBasedOnRoute (firstRouteAndValue, secondRouteAndValue) {
      switch (this.$route.name) {
        case firstRouteAndValue.routeName: return firstRouteAndValue.value
        case secondRouteAndValue.routeName: return secondRouteAndValue.value
        default: return null
      }
    }
  }
}
