export default function (key, successUrlNameRedirect='home') {
  return {
    data () {
      let initData = {
        dataUploading: false,
        uploadingErrors: {},
      }
      return initData
    },
    methods: {
      postResource (url) {
        if (this.dataUploading) {
          this.$message({
            showClose: true,
            message: 'Information is sending',
            type: 'warning',
          });
          return
        }

        this.dataUploading = true
        this.uploadingErrors = {}

        this.$http.post(url, this.$data[key])
          .then(function (response) {
            this.dataUploading = false
            this.$message({
              showClose: true,
              message: 'Success',
              type: 'success',
            })
            this.$router.push({ name: successUrlNameRedirect })
          })
          .catch(function ({bodyText}) {
            this.parseErrors(bodyText)
            this.displayUploadingErrors()
            this.dataUploading = false
          })
      },
      patchResource (url) {
        if (this.dataUploading) {
          this.$message({
            showClose: true,
            message: 'Information is sending',
            type: 'warning',
          });
          return
        }

        this.dataUploading = true
        this.uploadingErrors = {}

        this.$http.patch(url, this.$data[key])
          .then(function (response) {
            this.dataUploading = false
            this.$message({
              showClose: true,
              message: 'Success',
              type: 'success',
            })
            this.$router.push({ name: successUrlNameRedirect })
          })
          .catch(function ({bodyText}) {
            this.parseErrors(bodyText)
            this.displayUploadingErrors()
            this.dataUploading = false
          })
      },
      parseErrors (bodyText) {
        let bodyObj = JSON.parse(bodyText)
        // console.log(bodyObj)
        for (let key in bodyObj) {
          for (let error of bodyObj[key]) {
            // console.log(key, bodyObj[key], error)
            this.uploadingErrors[key] = error
          }
        }
      },
      displayUploadingErrors () {
        for (let errorKey in this.uploadingErrors) {
          this.$message({
            showClose: true,
            message: this.uploadingErrors[errorKey],
            type: 'error'
          });
        }
      }
    },
    computed: {
      hasUploadingErrors () {
        return Object.keys(this.uploadingErrors).some(
          key => this.uploadingErrors[key]
        )
      },
    },
  }
}
