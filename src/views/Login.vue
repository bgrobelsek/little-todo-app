<template>
  <div class="login-screen">
  
  <div 
    class="d-flex align-center justify-center" 
    style="height: 100vh"
  >
    <v-sheet 
      width="400" 
      class="mx-auto"
      color="transparent"
      >
      
      <h1 class="login">Login</h1>
      
      <v-card
        class="mx-auto px-6 py-8" 
        max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="login"
        >
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Email"
            placeholder="Enter email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :readonly="loading"
            clearable
            type="password"
            label="Password"
          ></v-text-field>

          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            class="mt-1"
            color="primary"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>

        <div class="mt-5">
          <p class="text-body-2">Don't have an account? <router-link to="/signup"> Sign Up </router-link> </p>
        </div>

      </v-card>
    </v-sheet>
    <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card>
          <v-card-text class="pa-5">
            Please enter a valid email and password! 
          </v-card-text>
          <v-card-actions>
            <v-btn 
              color="red" 
              block 
              @click="dialog = false" 
              to="/login">
              Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

  </div>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";


export default {
  data: () => ({
    email: '',
    password: '',
    form: false,
    loading: false,
    dialog: false
  }), 

  methods: {
    required (v) {
          return !!v || 'Field is required.'
        },
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
              (user) => {
                  // console.log(user)
                  this.$router.push('./todo');
              },
              (error) => {
                console.log(error)
                this.dialog = true
              }
          )
    },
  },
}
</script>

<style>
.login {
  text-align: center;
  font-family: "Roboto", sans-serif, !important;
  margin-bottom: 20px;
  font-weight: 200;
  color: white;
}

.login-screen {
  background: url('../assets/vvg.png');
  background-size: cover;
}

</style>