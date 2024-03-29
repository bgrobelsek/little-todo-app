<template>
<div>
  <div class="todos">
      <div class="addTodo">
      <!-- Add a Todo -->
      <v-text-field
        v-model="newTodoContent"
        class="pa-3 ma-2 mx-auto"
        rounded
        clearable
        outlined
        label="Enter a todo"
        append-icon="mdi-plus-circle"
        @click:append="addTodo"
        @keyup.enter="addTodo"
      ></v-text-field>
    </div>

    <div class="filterTodo">
      <v-btn 
        @click="openDialog"
        class="mb-8 transparent"
        >
        <v-icon>mdi-filter-check-outline</v-icon>
        </v-btn>
    </div>
        
  </div>

    <v-list
      class="pt-0 mx-auto"
    >
      <div 
        v-for="todo in todos"
        :key="todo.id"
      >
        <v-list-item
          @click="toggleDone(todo.id)"
          :class="{ 'blue lighten-5': todo.done }"
          class="pa-1 ma-3"
          >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="todo.done"
                color="primary"
                class="pl-2"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : todo.done }"
                >{{ todo.content }}
              </v-list-item-title>
            </v-list-item-content>
            
          <v-list-item-action>
            <v-btn 
            class="pr-2"
            icon
            @click.stop="deleteTodo(todo.id)"
            >
              <v-icon color="primary">mdi-delete-circle</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <!-- message for if there is no todos-->
    <p 
      class="noTodos"
      v-if="todos.length === 0"
      >There are no todos, add some!
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

  <v-dialog 
    v-model="dialogVisible" 
    @click="closeDialog"
    width="auto"
    >
    <v-card
    class="my-data">
    <!-- filter -->  
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search todos"
        class="search-input"
        clearable
        hide-details
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="todos"
        :search="search"
        class="my-data"
      ></v-data-table>
      <v-card-actions>
        <v-btn 
          @click="closeDialog"
          class="mx-auto"
          color="primary"
          >Close Filter</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  collection, 
  onSnapshot, 
  QuerySnapshot, 
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  Timestamp,
  query,
  serverTimestamp
} from "firebase/firestore"
import { db } from '@/firebase'

const todos = ref([])
const todosCollectionRef = collection(db, 'todos')
const newTodoContent = ref('')
const rules = [
  value => (value.length >= 3) || 'Min 3 characters'
]

const dialogVisible = ref(false);

const openDialog = () => {
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};

// search parameters 
const search = ref('')
const headers = ref([
  {
    title: 'Todo',
    align: 'start',
    sortable: false,
    key: doc.id
    },
    { 
      text:'Todo Content', 
      value: 'content'
    },
    {
      text: 'Done',
      value: 'done'
    }
  ])



// todos sorted by time-created descending
const q = query(todosCollectionRef, orderBy('createdAt', 'asc'))

onMounted(() => {
  onSnapshot(q, collection(db, "todos"), (QuerySnapshot) => {
    const fbTodos = []
    QuerySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done,
        createdAt: doc.createdAt
      }
      fbTodos.push(todo)
    })
    todos.value = fbTodos
  }) 
})

// add Todo
const addTodo = async () =>  {
  if (newTodoContent.value.length > 3) {
    await addDoc(todosCollectionRef, {
      content: newTodoContent.value,
      done: false,
      createdAt: serverTimestamp()
    })
    newTodoContent.value = ''
  } else {
    alert = true
  }  
}

// delete Todo
const deleteTodo = id => {
  deleteDoc(doc(todosCollectionRef, id))
}

// toggle Done
const toggleDone = id => {
  const index = todos.value.findIndex(todo => todo.id === id)
  updateDoc(doc(todosCollectionRef, id), {
    done: !todos.value[index].done
  })
}

</script>

<style scoped>

.my-data {
  width: 600px;
  margin: auto;
}

.search-input {
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
  margin-top: 2px;
}

.todos {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-dialog {
    width: unset;
}


.addTodo {
  width: 60%;
}

.noTodos {
  text-align: center; 
}

.searchAndFilter{
 display: flex;
 width: 50%;
 margin: auto;
}
.v-footer a:hover {
  font-weight: bold;
}

.v-footer a {
  text-decoration: none;
}

.v-list {
  width: 50%;
}

.v-select {
  width: 40px;
}

.v-select-item--active {
  backdrop-filter: white !important;
}

.v-list-item {
  border: 1px solid grey;
  border-radius: 10px;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .v-list {
    width: 90%;
  }
  .v-text-field {
    width: 100%; 
  }
}

</style>
