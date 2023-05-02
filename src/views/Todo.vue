<template>
  <div class="home">
    <!-- Add a Todo -->
    <v-text-field
      v-model="newTodoContent"
      class="pa-3"
      clearable
      outlined
      label="Enter a todo"
      append-icon="mdi-plus-circle"
      hide-details="auto"
      @click:append="addTodo"
      @keyup.enter="addTodo"
    ></v-text-field>

    <v-list
      class="pt-0 mx-auto"
      flat
      width="70%"
      round
    >
    <!-- WIDTH ^ nije dobar, moraš ga dotjerati da se ne aplicira kada si na mobitelu-->
      <div 
        v-for="todo in todos"
        :key="todo.id"
      >
        <v-list-item
          @click="toggleDone(todo.id)"
          :class="{ 'blue lighten-5': todo.done }"
          class="pa-1 ma-2"
          >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="todo.done"
                color="primary"
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
  updateDoc
} from "firebase/firestore"
import { db } from '@/firebase'

const todos = ref([])
const todosCollectionRef = collection(db, 'todos')
const newTodoContent = ref('')

const rules = [
  value => !!value || 'Required.',
  value => (value.length >= 3) || 'Min 3 characters'
]


onMounted(() => {
  onSnapshot(collection(db, "todos"), (QuerySnapshot) => {
    const fbTodos = []
    QuerySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
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
      done: false
    })
    newTodoContent.value = ''
  } else {
    alert('NE MOŽE BRE')
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
.noTodos {
  text-align: center; 
}

.v-footer a:hover {
  font-weight: bold;
}

.v-footer a {
  text-decoration: none;
}

.v-list-item {
  border: 1px solid grey;
  border-radius: 5px;
}

@media only screen and (max-width: 600px) {
  .v-list {
    width: "90%";
  }
}

</style>
