<template>
    <div>
    <!-- navigation drawer -->
    <v-navigation-drawer 
      v-model="drawer"
      app
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Little todo app
            <v-icon
              color="black"
            >mdi-check-all</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle> 
            Get more done!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider/>

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

  <!-- app bar -->
   <v-app-bar
      app
      color="#fcb69f"
      dark
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          ></v-img>
        </template>

      <v-app-bar-nav-icon 
      @click="drawer = !drawer">
    </v-app-bar-nav-icon>
    
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

    <router-view></router-view>

</div>
</template>

<script>
export default {
  data: () => ({ 
    drawer: false,
    search: '',
    items: [
      { title: 'Todos', icon: 'mdi-calendar-check-outline', to: '/todo' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' }, 
      { title: 'Contact', icon: 'mdi-email', to: '/email'},
      { title: 'Log Out', icon: 'mdi-logout', to: '/login'}
    ],
  })
}

</script>

<style>

.v-app-bar {  
  background: url("../assets/vvg.png");
  background-size: cover;
}

</style>