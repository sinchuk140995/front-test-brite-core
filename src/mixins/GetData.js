export default function (key) {
  return {
    data () {
      let initData = {
        dataLoading: false,
        loadingErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      initData.loadingErrors[key] = null

      return initData
    },
    methods: {
      fetchResource (url) {
        this.dataLoading = true
        this.loadingErrors[key] = null

        this.$http.get(`${this.$data.baseUrl}${url}`)
          .then(function ({body}) {
            this.$data[key] = body
            this.dataLoading = false
          })
          .catch(function (error) {
            this.loadingErrors[key] = error
            this.dataLoading = false
            // this.$data[key] = null
          })
      },
    },
    computed: {
      hasLoadingErrors () {
        return Object.keys(this.loadingErrors).some(
          key => this.loadingErrors[key]
        )
      },
    },
  }
}
