<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />

      <template>
        <TodoFormAdd />
        <TodoItems />
        <TodoEmpty />
      </template>
    </div>
  </div>
</template>

<script>
import TodoItems from "./components/TodoItems.vue";
import TodoFormAdd from "./components/TodoFormAdd.vue";
import TodoSpinner from "./components/TodoSpinner.vue";
import TodoEmpty from "./components/TodoEmpty.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoEmpty,
    TodoFormAdd,
    TodoItems,
  },

  data() {
    return {
      loading: false,
    };
  },

  created() {
    this.loading = true;
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        this.$store.commit("storeTodos", response.data);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
