<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoFormAdd />
        <TodoItems v-if="$store.state.todos && $store.state.todos.length > 0" />
        <TodoEmpty v-else />
      </template>
    </div>
  </div>
</template>
<script>
import TodoItems from "./components/TodoItems.vue";
import TodoFormAdd from "./components/TodoFormAdd.vue";
import TodoSpinner from "./components/TodoSpinner.vue";
import TodoEmpty from "./components/TodoEmpty.vue";

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
    this.$store.dispatch("getTodos").finally(() => {
      this.loading = false;
    });
  },
};
</script>
