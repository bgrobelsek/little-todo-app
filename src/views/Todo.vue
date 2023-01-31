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

    <!-- Alert -->
    <v-alert 
      :value="alert"
      class="ma-5"
      type="info"
      dark 
      shaped
      border="bottom"
      transition="scroll-x-transition"
      >Todo Added!
    </v-alert>

  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        newTaskTitle: '',
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
        let newTask = {
          id: Math.random(),
          title: this.newTaskTitle,
          date: new Date(),
          done: false
        }
        this.tasks.push(newTask);
        this.newTaskTitle = '';
        this.alert = true;
      },
      doneTask(id) {
        let task = this.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
      }
    }
  }
</script>

<style scoped>
.v-alert {
  top: auto;
  bottom: 10px;
  outline: none;
  z-index: 100;
}
</style>