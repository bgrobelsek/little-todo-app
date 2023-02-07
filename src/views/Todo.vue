<template>
  <div class="home">
    <!-- Add a Todo -->
    <v-text-field
      v-model="newTaskTitle"
      class="pa-3"
      hide-details
      clearable
      @click:append="addTask"
      @keyup.enter="addTask"
      outlined
      label="Enter a todo"
      append-icon="mdi-plus-circle"
    ></v-text-field>

    <v-list
      class="pt-0"
      flat
    >
      <div 
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
          >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
                >{{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
                >{{ task.date }}
              </v-list-item-title>
            </v-list-item-content>

          <v-list-item-action>
            <v-btn 
              icon
              @click.stop="deleteTask(task.id)"
              >
              <v-icon color="primary">mdi-delete-circle</v-icon>
            </v-btn>
          </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <p 
      class="noTodos"
      v-if="tasks.length === 0"
      >There are no todos, add some!
      </p>

    <!-- Alert -->
      <v-alert 
        :value="alert"
        class="ma-5"
        type="info"
        dark 
        shaped
        bottom
        border="bottom"
        transition="scroll-x-transition"
        >Todo Added!
      </v-alert>

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

  export default {
    name: 'Home',
    emits: ['add-task', 'done-task', 'delete-task'],
    data() {
      return {
        newTaskTitle: '',
        id: Math.random(),
        done: false,
        tasks: [],
        alert: false
      }
    },
    watch: {
      alert() {
        if (this.alert === true) {
          setTimeout(() => {
            this.alert = false;
          }, 2000);
        }
      }
    },
    methods: {
      addTask() {
        // let newTask = {
        //   id: Math.random(),
        //   title: this.newTaskTitle,
        //   done: false
        // }
        // // this.tasks.push(newTask);
        // this.newTaskTitle = '';
        // this.alert = true;
        // console.log(this.newTaskTitle)

        fetch('https://test-813d2-default-rtdb.europe-west1.firebasedatabase.app/todo.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: this.id,
            title: this.newTaskTitle,
            done: this.done
          })
        })
        
        // read results - check Vue HTTP
        fetch('https://test-813d2-default-rtdb.europe-west1.firebasedatabase.app/todo.json', {

        })
      },

      doneTask(id) {
        let task = this.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
      },


    }
  }
</script>

<style scoped>
.noTodos {
  text-align: center; 
}

.v-footer a:hover {
  font-weight: bold;
}

.v-footer a {
text-decoration: none;
}

</style>