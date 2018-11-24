export default function (errorKey) {
  return {
    methods: {
      parseErrors (bodyText) {
        let bodyObj = (typeof bodyText === 'string') ? JSON.parse(bodyText) : bodyText
        for (let key in bodyObj) {
          if (typeof bodyObj[key] === 'string') {
            this[errorKey][key] = bodyObj[key]
          } else if (typeof bodyObj[key] === 'object') {
            this.parseErrors(bodyObj[key])
          }
        }
      },
      displayErrors (bodyText) {
        this.parseErrors(bodyText)
        for (let key in this[errorKey]) {
          this.$message({
            showClose: true,
            message: this[errorKey][key],
            type: 'error'
          })
        }
      },
    },
  }
}
