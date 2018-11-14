export default function (key) {
  return {
    data () {
      let initData = {
        remoteDataLoading: 0,
        remoteErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      initData.remoteErrors[key] = null

      return initData
    },
    methods: {
      fetchResource (url) {
        this.$data.remoteDataLoading += 1
        this.$data.remoteErrors[key] = null

        this.$http.get(`${this.$data.baseUrl}${url}`)
          .then(function ({body}) {
            this.$data[key] = body
            this.$data.remoteDataLoading -= 1
          })
          .catch(function (error) {
            this.$data.remoteErrors[key] = error
            this.$data.remoteDataLoading -= 1
            // this.$data[key] = null
          })
      },
    },
    computed: {
      dataLoading () {
        return this.$data.remoteDataLoading !== 0
      },
      hasErrors () {
        return Object.keys(this.$data.remoteErrors).some(
          key => this.$data.remoteErrors[key]
        )
      },
    },
  }
}
