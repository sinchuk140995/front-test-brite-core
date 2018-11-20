export default function (errors) {
  return {
    methods: {
      checkRequiredValue (value, fieldName) {
        if (!value) {
          this.$data[errors][fieldName] = 'This field is required'
        }
      },
      checkValueLength (value, fieldName, minLength) {
        if (!this.$data[errors][fieldName] && typeof value === 'string') {
          if (value.length < minLength) {
            this.$data[errors][fieldName] = `
              This field must be at least ${minLength} characters
            `
          }
        }
      },
      checkRequiredField (field) {
        if (field.field_type === 'select' && !field.select_option) {
          let fieldName = field.name
          this.$data[errors][fieldName] = 'This field is required'
        }
        else if (field.field_type === 'number' && !field.value) {
          let fieldName = field.name
          this.$data[errors][fieldName] = 'This field is required'
        }
        else if (field.field_type === 'text' && !field.value) {
          let fieldName = field.name
          this.$data[errors][fieldName] = 'This field is required'
        }
      },
      checkFieldLength (field, minLength) {
        let fieldName = field.name
        if (!this.$data[errors][fieldName] && field.field_type === 'text') {
          if (field.value.length < minLength) {
            let fieldName = field.name
            this.$data[errors][fieldName] = `This field must be at least ${minLength} characters`
          }
        }
      },
      checkRequiredDynamicField (field, index) {
        if (!field.name) {
          this.$data[errors][index] = 'This field is required'
        }
        else if (field.field_type === 'select') {
          for (let optionIndex = 0; optionIndex < field.options.length; optionIndex++) {
            let option = field.options[optionIndex]
            if (!option.name) {
              let optionErrorKey = `${index}-option-${optionIndex}`
              this.$data[errors][optionErrorKey] = 'This field is required'
            }
          }
        }
      },
    }
  }
}
