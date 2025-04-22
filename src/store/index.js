import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },

    storeTodo(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      if (index >= 0) {
        state.todos.splice(index, 1, payload);
      } else {
        state.todos.push(payload);
      }
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
  },

  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios
            .get("http://localhost:3000/todos")
            .then((response) => {
              console.log("Dados recebidos:", response.data);
              commit("storeTodos", response.data);
              resolve();
            })
            .catch((error) => {
              console.error("Erro ao buscar dados:", error);
            });
        });
      });
    },

    addTodo({ commit }, data) {
      return axios
        .post("http://localhost:3000/todos", data)
        .then((response) => {
          commit("storeTodos", [...state.todos, response.data]);
        });
    },

    updateTodo({ commit }, { id, data }) {
      return axios
        .patch(`http://localhost:3000/todos/${id}`, data)
        .then((response) => {
          commit("storeTodos", response.data);
        });
    },

    deleteTodo({ commit }, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit("deleteTodo", id);
      });
    },
  },
  modules: {},
});
