<template>
  <div>
    <form class="pa-6">
      <v-text-field
        v-model="name"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-textarea
        v-model="message"
        label="Message"
        required
        @input="$v.message.$touch()"
        @blur="$v.message.$touch()"
      ></v-textarea>

      <v-btn
        class="mr-4 success"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submit() {
        alert('Out of service')
      }, 
      clear() {
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
</script>
