<template>
  <main class="login">
    <h1>Please login</h1>
    <BaseForm
      class="form"
      :title="title"
      :operation="operation"
      :valid="valid">
        <FormInput
          name="username"
          v-model="username"
          placeholder="Username"
        />
        <FormInput
          type="password"
          name="password"
          v-model="password"
          placeholder="Password"
        />
        <template v-if="mode === 'signup'">
          <FormInput
            type="password"
            name="password2"
            v-model="password2"
            placeholder="Retype password"
            :invalid="retypePasswordError"
          />
          <FormInput
            type="email"
            name="email"
            v-model="email"
            placeholder="Email"
          />
        </template>

        <template slot="actions">
          <template v-if="mode === 'login'">
            <button
              type="button"
              @click="mode = 'signup'">
              Sign up
            </button>
            <button
              type="submit"
              :disabled="!valid">
              Login
            </button>
          </template>
          <template v-else-if="mode === 'signup'">
            <button
              type="button"
              @click="mode = 'login'">
              Back to login
            </button>
            <button
              type="submit"
              :disabled="!valid">
              Create account
            </button>
          </template>
        </template>
    </BaseForm>
  </main>
</template>

<script>
export default {
  data () {
    return {
      mode: 'login',
      username: '',
      password: '',
      password2: '',
      email: '',
    }
  },
  methods: {
    operation () {
      this[this.mode]()
    },
    login () {
      // todo
    },
    signup () {
      //todo
    },
  },
  computed: {
    title () {
      switch (this.mode) {
        case 'login': return 'Login'
        case 'signup': return 'Creata a new account'
      }
    },
    retypePasswordError () {
      return this.password2 && this.password !== this.password2
    },
    signupValid () {
      return this.password2 && this.email && !this.retypePasswordError
    },
    valid () {
      return this.username && this.password &&
        (this.mode !== 'signup' || this.signupValid)
    },
  },
}
</script>
