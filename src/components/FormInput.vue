<template>
  <div>
    <input
      class="input"
      :class="inputClass"
      :type="type"
      :name="name"
      :value="text"
      :placeholder="placeholder"
      @input="update"
    />
  </div>
</template>

<script>
// value.prop="value"
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
    text: {
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
  model: {
    prop: 'text',
    event: 'update',
  },
  methods: {
    update (event) {
      this.$emit('update', event.currentTarget.value)
    },
  },
}
</script>
