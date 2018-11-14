export default function (key) {
  return {
    data () {
      let initData = {
        dataLoading: 0,
        loadingErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      initData.loadingErrors[key] = null

      return initData
    },
    methods: {
      fetchResource (url) {
        this.$data.dataLoading += 1
        this.$data.loadingErrors[key] = null

        this.$http.get(`${this.$data.baseUrl}${url}`)
          .then(function ({body}) {
            this.$data[key] = body
            this.$data.dataLoading -= 1
          })
          .catch(function (error) {
            this.$data.loadingErrors[key] = error
            this.$data.dataLoading -= 1
            // this.$data[key] = null
          })
      },
    },
    computed: {
      loadingData () {
        return this.$data.dataLoading !== 0
      },
      hasLoadingErrors () {
        return Object.keys(this.$data.loadingErrors).some(
          key => this.$data.loadingErrors[key]
        )
      },
    },
  }
}
