<template>

  <!-- the about section -->
  <div class="about pa-6">
    <h1>About The Little Todo App</h1>
    <p>
      Hello, my name is Bruno and welcome to the
      Little-Todo-App!
    </p>
    <p>
      This app is my University project
      it's built by using VueJS, Vuetify
      and Firebase.
    </p>
    <p>
      Todos are stored in Google's firebase database and are
      managed in realtime using query snapshots.
      You can add todos, "cross" them out when they are done
      and delete them. On the left side there is a navigation 
      drawer with a little menu so you can navigate around. The app is also
      suited for desktop / tablet / mobile phone use.
    </p>
    <p>
      Please note that this app is still in development
      so some things need more work and there are areas
      that could be improved with time or but the basic
      functionallity is there.
    </p>
    <p>
      Links to my Github, Instagram and LinkedIn accounts are 
      in the top right corner.
    </p>
    <h3>Bruno Grobelšek</h3>

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

.v-footer a {
  text-decoration: none;
}
</style>