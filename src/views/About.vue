<template>
  <div class="about pa-6">
    <h1>About The Little Todo App</h1>
    <p>
      Hello, my name is Bruno and welcome to my
      Little-Todo-App!
    </p>
    <p>
      This app is my University project,
      it's built by using JavaScript, Vue, Vuetify
      and Firebase.
    </p>
    <p>
      You can add todos, "cross" them when they are done
      and delete them. I wanted to keep the app nice and
      simple without overthinking or overdoing it. Todos 
      are stored in Googles firebase database and are
      managed in realtime using query snapshots.
    </p>

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

<style>
h1 {
  padding-bottom: 10px;
}
</style>