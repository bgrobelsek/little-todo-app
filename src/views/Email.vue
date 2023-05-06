<template>
  
  <div>
    <!-- email form -->
    <form class="pa-6">
      <v-text-field
        v-model="name"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>
      <v-textarea
        v-model="message"
        label="Message"
        required
      ></v-textarea>

      <v-btn
        class="mr-4 success"
        @click="sendEmail"
      >
        submit
      </v-btn>
      <v-btn @click="clearEmail">
        clear
      </v-btn>
    </form>

    <!-- modal -->
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          <p>Your email has been sent into the universe!</p>
          <p>(lol, not really... this is just a mockup)</p>
        </v-card-text>
        <v-card-actions>
          <v-btn 
            color="primary" 
            block 
            @click="dialog = false">
            Close 
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 
    <!-- footer -->
    <v-footer 
      padless
      app 
      bottom
      >
      <v-col
      class="text-center"
      cols="20"
      >
      <div>
        Made with
      </div> 
      <a href="https://vuejs.org/" target="_blank"> Vue </a> - 
      <a href="https://vuetifyjs.com/en/" target="_blank"> Vuetify </a> -
      <a 
      href="https://firebase.google.com/" 
      target="_blank"
      class="firebase"
      > Firebase </a>
      </v-col>
    </v-footer>
 
  </div>
  
</template>

<script>

/*
This script holds the input field values for the email body,
the boolean value that will trigger the modal to open
and close and two functions(methods) for sending an
email and to clear it's input fields.
*/

 export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        dialog: false
      }
    },
    methods: {
      sendEmail() {
        this.dialog = true
        this.clearEmail()
      }, 
      clearEmail() {
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
</script>

<style>
.v-footer a:hover {
  font-weight: bold;
}

.v-footer a {
  text-decoration: none;
}
</style>
