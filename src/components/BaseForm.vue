<template>
  <form @submit.prevetnt="submit">
    <div v-loading="loading">
      <section class="content">
        <h2>{{ title }}</h2>
        <slot />
        <div class="actions">
          <slot name="actions" />
        </div>
        <div class="error" v-if="error">{{ error }}</div>

      </section>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      error: null,
      loading: false,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    operation: {
      type: Function,
      required: true,
    },
    valid: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    submit () {
      if (this.valid && !this.loading) {
        this.error = null
        this.loading = true
        try {
          this.operation()
          this.busy = false
        } catch (e) {
          this.error = e
          this.busy = false
        }
      }
    },
  },
}
</script>
