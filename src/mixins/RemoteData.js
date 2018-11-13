export default function (key) {
  return {
    data () {
      let initData = {
        remoteDataLoading: 0,
        remoteErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      initData[key] = {}
      initData.remoteErrors[key] = null

      return initData
    },
    // created () {
    //   for (const key in resources) {
    //     let url = resources[key]['url']

    //     if (resources[key]['routeParamName']) {
    //       let routeParamName = resources[key]['routeParamName']
    //       url = url.replace('{}', this.$route.params[routeParamName])
    //     }

    //     this.fetchResource(key, url)
    //   }
    // },
    methods: {
      fetchResource (key, url) {
        this.$data.remoteDataLoading += 1
        this.$data.remoteErrors[key] = null

        this.$http.get(`${this.$data.baseUrl}${url}`)
          .then(function ({body}) {
            this.$data[key] = body
            this.$data.remoteDataLoading -= 1
          })
          .catch(function (error) {
            this.$data.remoteDataLoading -= 1
            this.$data[key] = null
            this.$data.remoteErrors[key] = error
          })
      },
      pushResource (key, url) {
        this.$data.remoteDataLoading += 1
        this.$data.remoteErrors[key] = null

        this.$http.post(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            console.log(response)
            this.$data.remoteDataLoading -= 1
          })
          .catch(function (error) {
            console.log(error)
            this.$data.remoteDataLoading -= 1
            this.$data.remoteErrors[key] = error
          })
      },
      updateResource (key, url) {
        this.$data.remoteDataLoading += 1
        this.$data.remoteErrors[key] = null

        this.$http.patch(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            console.log(response)
            this.$data.remoteDataLoading -= 1
          })
          .catch(function (error) {
            console.log(error)
            this.$data.remoteDataLoading -= 1
            this.$data.remoteErrors[key] = error
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
