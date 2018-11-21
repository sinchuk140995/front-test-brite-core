export default function () {
  return {
    data () {
      let initData = {
        dataDeleting: false,
        deletingErrors: {},
      }
      return initData
    },
    methods: {
      deleteResource (url) {
        if (this.dataDeleting) {
          this.$message({
            showClose: true,
            message: 'Information is sending',
            type: 'warning',
          });
          return
        }

        this.dataDeleting = true
        this.deletingErrors = {}

        this.$http.delete(url)
          .then(function (response) {
            this.dataDeleting = false
            this.$message({
              showClose: true,
              message: 'Deleted',
              type: 'success',
            })
          })
          .catch(function ({bodyText}) {
            this.parseErrors(bodyText)
            this.displayDeletingErrors()
            this.dataDeleting = false
          })
      },
      parseErrors (bodyText) {
        let bodyObj = JSON.parse(bodyText)
        for (let key in bodyObj) {
          for (let error of bodyObj[key]) {
            this.deletingErrors[key] = error
          }
        }
      },
      displayDeletingErrors () {
        for (let errorKey in this.deletingErrors) {
          this.$message({
            showClose: true,
            message: this.deletingErrors[errorKey],
            type: 'error'
          });
        }
      }
    },
    computed: {
      hasDeletingErrors () {
        return Object.keys(this.deletingErrors).some(
          key => this.deletingErrors[key]
        )
      },
    },
  }
}
