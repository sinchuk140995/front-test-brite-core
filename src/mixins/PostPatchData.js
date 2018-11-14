// refactor errors and loading namings
export default function (key) {
  return {
    data () {
      let initData = {
        dataUploading: 0,
        uploadingErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      initData.uploadingErrors[key] = null

      return initData
    },
    methods: {
      postResource (url) {
        this.$data.dataUploading += 1
        this.$data.uploadingErrors[key] = null

        this.$http.post(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            console.log(response)
            this.$data.dataUploading -= 1
          })
          .catch(function (error) {
            console.log(error)
            this.$data.dataUploading -= 1
            this.$data.uploadingErrors[key] = error
          })
      },
      patchResource (url) {
        this.$data.dataUploading += 1
        this.$data.uploadingErrors[key] = null

        this.$http.patch(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            console.log(response)
            this.$data.dataUploading -= 1
          })
          .catch(function (error) {
            console.log(error)
            this.$data.dataUploading -= 1
            this.$data.uploadingErrors[key] = error
          })
      },
    },
    computed: {
      uploadingData () {
        return this.$data.dataUploading !== 0
      },
      hasUploadingErrors () {
        return Object.keys(this.$data.uploadingErrors).some(
          key => this.$data.uploadingErrors[key]
        )
      },
    },
  }
}
