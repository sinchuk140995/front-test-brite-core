export default function (key) {
  return {
    data () {
      let initData = {
        dataUploading: 0,
        uploadingErrors: {},
        baseUrl: 'http://localhost:8000/'
      }

      // initData.uploadingErrors[key] = null

      return initData
    },
    methods: {
      postResource (url) {
        if (this.uploadingData) {
          this.$message({
            message: 'Information is sending',
            type: 'warning'
          });
          return
        }

        this.$data.dataUploading += 1
        this.$data.uploadingErrors = {}

        this.$http.post(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            this.$data.dataUploading -= 1
            this.$message({
              message: 'Success.',
              type: 'success'
            });
          })
          .catch(function ({bodyText}) {
            console.log(bodyText)
            this.parseErrors(bodyText)
            this.displayUploadingErrors()
            this.$data.dataUploading -= 1
          })
      },
      patchResource (url) {
        if (this.uploadingData) {
          this.$message({
            message: 'Information is sending',
            type: 'warning'
          });
          return
        }

        this.$data.dataUploading += 1
        this.$data.uploadingErrors = {}

        this.$http.patch(`${this.$data.baseUrl}${url}`, this.$data[key])
          .then(function (response) {
            this.$data.dataUploading -= 1
            this.$message({
              message: 'Success.',
              type: 'success'
            });
          })
          .catch(function ({bodyText}) {
            this.parseErrors(bodyText)
            this.displayUploadingErrors()
            this.$data.dataUploading -= 1
          })
      },
      parseErrors (bodyText) {
        let bodyObj = JSON.parse(bodyText)
        // console.log(bodyObj)
        for (let key in bodyObj) {
          for (let error of bodyObj[key]) {
            // console.log(key, bodyObj[key], error)
            this.$data.uploadingErrors[key] = error
          }
        }
      },
      displayUploadingErrors () {
        for (let errorKey in this.$data.uploadingErrors) {
          this.$message.error(this.$data.uploadingErrors[errorKey])
        }
      }
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
