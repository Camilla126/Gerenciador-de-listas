<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner />
      <TodoFormAdd />
      <TodoItems />
      <TodoEmpty />
    </div>
  </div>
</template>

<script>
import TodoItems from "./components/TodoItems.vue";
import TodoFormAdd from "./components/TodoFormAdd.vue";
import TodoSpinner from "./components/TodoSpinner.vue";
import TodoEmpty from "./components/TodoEmpty.vue";

export default {
  nome: "App",
  components: {
    TodoSpinner,
    TodoEmpty,
    TodoFormAdd,
    TodoItems,
  },
};
</script>
