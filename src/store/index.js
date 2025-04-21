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
            })
            .finally(() => {
              this.loading = false;
            });
        }, 3000);
      });
    },
  },
  modules: {},
});
