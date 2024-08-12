<template>
  <div>
    <input v-model="texto" placeholder="Escribe algo" />
    <button @click="enviarTexto">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: ''
    };
  },
  methods: {
    enviarTexto() {
      this.$emit('texto-enviado', this.texto);
    }
  }
};
</script>
