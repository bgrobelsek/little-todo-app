<template>
  <div class="signup">
    <div 
      class="d-flex align-center justify-center" 
      style="height: 100vh"
    >
      <v-sheet 
        width="400" 
        class="mx-auto"
        color="transparent"
        >

        <h1 class="login">Sign up</h1>

        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form
            v-model="form"
            @submit.prevent="signUp"
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
              color="green"
              size="large"
              type="submit"
              variant="elevated"
            >
              Register
            </v-btn>
          </v-form>
  
          <div class="mt-5">
                  <p class="text-body-2">Already have an account? 
                    <router-link to="/login">Login</router-link> </p>
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
            You have succesfully created an account! 
          </v-card-text>
          <v-card-actions>
            <v-btn 
              color="primary" 
              block 
              @click="dialog = false" 
              to="/login">
              Go to login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="error"
        activator="parent"
        width="auto"
      >
        <v-card>
          <v-card-text class="pa-5">
            Please enter a valid email and password.
          </v-card-text>
          <v-card-actions>
            <v-btn 
              color="primary" 
              block 
              @click="error = false" 
              >
              I understand</v-btn>
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
        dialog: false,
        error: false
      }), 
  
      methods: {
        required (v) {
          return !!v || 'Field is required'
        },
        signUp() {
            firebase.auth().
            createUserWithEmailAndPassword(this.email, this.password).
            then(
                (user) => {
                    // console.log(user)
                    this.dialog = true
                },
                (error) => {
                    this.error = true
                }                
            )
        }
      },
    }
  </script>

<style>
.login {
  text-align: center;
  font-family: "Roboto", sans-serif, !important;
  margin-bottom: 20px;
  font-weight: 150;
}

.signup {
  background: whitesmoke;
}
</style>