import RemoteDataErrors from './RemoteDataErrors'
export default function (key, successUrlNameRedirect='home') {
  return {
    data () {
      let initData = {
        dataUploading: false,
        uploadingErrors: {},
      }
      return initData
    },
    mixins: [
      RemoteDataErrors('uploadingErrors'),
    ],
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
            this.displayErrors(bodyText)
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
            this.displayErrors()
            this.dataUploading = false
          })
      },
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
