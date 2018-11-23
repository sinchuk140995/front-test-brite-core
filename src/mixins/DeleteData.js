export default function (key) {
  return {
    data () {
      let initData = {
        dataDeleting: false,
        deletingErrors: {},
      }
      return initData
    },
    methods: {
      deleteResourceFromList (arrayIndex, deleteRiskApiUrl) {
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

        let resourceList = this.getProperty(key, this.$data)

        this.$http.delete(deleteRiskApiUrl)
          .then(function (response) {
            resourceList.splice(arrayIndex, 1)
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
      getProperty (propertyName, object) {
        let parts = propertyName.split( "." )
        let property = object
        for (let part of parts) {
          property = property[part]
        }
        return property
      },
      parseErrors (bodyText) {
        let bodyObj = JSON.parse(bodyText)
        for (let key in bodyObj) {
          if (typeof bodyObj[key] === 'array') {
            for (let error of bodyObj[key]) {
              this.deletingErrors[key] = error
            }
          } else {
            this.deletingErrors[key] = bodyObj[key]
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
