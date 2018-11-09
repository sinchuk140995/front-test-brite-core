<template>
  <div>
    <input
      class="input"
      :class="inputClass"
      :type="type"
      :name="name"
      :value.prop="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      required: true,
    },
    placeholder: {
      type: String,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputClass () {
      return {
        'invalid': this.invalid,
      }
    },
  },
}
</script>
