import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 0,
  },
  mutations: {
    aumentar(state) {
      state.contador++;
    },
    reducir(state) {
      if (state.contador > 0) {
        state.contador--;
      }
    },
  },
  actions: {
    incrementar({ commit }) {
      commit("aumentar");
    },
    disminuir({ commit }) {
      commit("reducir");
    },
  },
  getters: {
    contador: (state) => state.contador,
  },
});
