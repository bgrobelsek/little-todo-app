<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="username"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Username"
          placeholder="Enter username"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          clearable
          type="password"
          label="Password"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>


<script>
  export default {
    data: () => ({
      form: false,
      username: '',
      password: '',
      loading: false,
    }), 

    methods: {
      onSubmit () {
        if (!this.form) return
          this.loading = true
        setTimeout(() => (this.loading = false), 1500)
        console.log(this.username)
        console.log(this.password)
        this.letMeIn()
        this.username = ''
        this.password = ''
      },
      required (v) {
        return !!v || 'Field is required'
      },
      // new method for logging in 
      letMeIn () {
        if(this.username === 'test' && this.password === '1234')
        {
          this.$router.push('/');
        }
      }
    },
  }
</script>