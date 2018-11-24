import RemoteDataErrors from './RemoteDataErrors'
export default function (key) {
  return {
    data () {
      let initData = {
        dataDeleting: false,
        deletingErrors: {},
      }
      return initData
    },
    mixins: [
      RemoteDataErrors('deletingErrors'),
    ],
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
            this.displayErrors(bodyText)
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
