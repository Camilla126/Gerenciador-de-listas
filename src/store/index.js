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
        }, 100);
      });
    },

    addTodo(context, data) {
      return axios
        .patch("http://localhost:3000/todos", data)
        .then((response) => {
          context.commit("storeTodos", [...context.state.todos, response.data]);
        });
    },

    updateTodo(context, { id, data }) {
      return axios.patch(`http://localhost:3000/todos/${id}`, data);
    },
  },
  modules: {},
});
