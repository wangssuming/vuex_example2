import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  plugins: [createPersistedState()],
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
});

new Vue({
  el: '#app',
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    }
  }
});
