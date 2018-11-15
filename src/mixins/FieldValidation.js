export default {
  methods: {
    fieldIsRequired (field, key, valueName, errorKey) {
      if (!field[key]){
        this[errorKey][field[valueName]] = 'This field is required.'
        return true
      } else {
        return false
      }
    }
  }
}
