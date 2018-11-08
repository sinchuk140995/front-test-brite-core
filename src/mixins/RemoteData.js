export default function (resources) {
  return {
    data () {
      let initData = {
        remoteDataLoading: 0,
        remoteErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      for (const key in resources) {
          initData[key] = null
          initData.remoteErrors[key] = null
      }

      return initData
    },
    methods: {
      fetchResource (key, url) {
        this.$data.remoteDataLoading += 1
        this.$data.remoteErrors[key] = null

        this.$http.get(`${this.$data.baseUrl}${url}`)
          .then(function (response) {
            this.$data[key] = response.body
            this.$data.remoteDataLoading -= 1
          })
          .catch(function (error) {
            this.$data.remoteDataLoading -= 1
            this.$data.remoteErrors[key] = error
          })
      },
    },
    created () {
      for (const key in resources) {
        let url = resources[key]
        this.fetchResource(key, url)
      }
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
