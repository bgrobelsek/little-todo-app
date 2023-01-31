<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Little todo app
          </v-list-item-title>
          <v-list-item-subtitle>
            Choo + Choo = Train
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to='item.to'
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>

   <v-app-bar
      app
      color="#fcb69f"
      dark
      src="./assets/vvg.png"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon 
        @click="drawer = !drawer">
       </v-app-bar-nav-icon>

      <v-app-bar-title></v-app-bar-title>

      <v-spacer></v-spacer>
      
      <!-- Links to media -->
      <!-- Linkedin -->
      <v-btn icon
        href="https://www.linkedin.com/in/bruno-grobel%C5%A1ek-70b67b17b/"
        target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <!-- Github -->
      <v-btn icon
        href="https://github.com/bgrobelsek"
        target="_blank"
        >
          <v-icon>mdi-github</v-icon>
      </v-btn>

      <!-- Instagram -->
      <v-btn icon
        href="https://www.instagram.com/bruno.grobelsek/"
        target="_blank"
        >
          <v-icon>mdi-instagram</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-calendar-check-outline', to: '/' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' }, 
          { title: 'E-mail me!', icon: 'mdi-email', to: '/email'}
        ],
      })
  }
</script>