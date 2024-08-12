<template>
  <h2>Contador</h2>
  <p class="counter">{{ contador }} </p>

  <div>
    <button class="btn primary" @click="incrementar">Aumentar</button>
    <button class="btn warning" @click="disminuir">Disminuir</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ContadorComponent',
  computed: {
    ...mapState(['contador']),
  },
  methods: {
    ...mapActions(['incrementar', 'disminuir']),
  },
};
</script>

  
  
  <style>
      .btn {
          border-radius: 0.8rem;
          margin: 0 5px;
          width: 100px;
          padding: 5px;
          font-size: 1rem;
      }
      .primary {
          background-color: rgb(77, 231, 141);
          color: rgb(255, 255, 255);
      }
      .counter{
        font-size: 36px;
      }
  
      .warning {
          background-color: rgb(230, 53, 53);
          color: rgb(255, 255, 255);
      }
  </style>