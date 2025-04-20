import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {},
  modules: {},
});
