// refactor errors and loading namings
export default function (key) {
  return {
    data () {
      let initData = {
        postDataLoading: 0,
        postErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      initData.postErrors[key] = null

      return initData
    },
    methods: {
      postResource (url) {
        this.$data.postDataLoading += 1
        this.$data.postErrors[key] = null

        this.$http.post(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            console.log(response)
            this.$data.postDataLoading -= 1
          })
          .catch(function (error) {
            console.log(error)
            this.$data.postDataLoading -= 1
            this.$data.postErrors[key] = error
          })
      },
      patchResource (url) {
        this.$data.postDataLoading += 1
        this.$data.postErrors[key] = null

        this.$http.patch(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            console.log(response)
            this.$data.postDataLoading -= 1
          })
          .catch(function (error) {
            console.log(error)
            this.$data.postDataLoading -= 1
            this.$data.postErrors[key] = error
          })
      },
    },
    computed: {
      postDataUploading () {
        return this.$data.postDataLoading !== 0
      },
      hasPostErrors () {
        return Object.keys(this.$data.postErrors).some(
          key => this.$data.postErrors[key]
        )
      },
    },
  }
}
