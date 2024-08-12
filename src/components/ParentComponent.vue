<template>
  <div>
    <p>Texto recibido: {{ textoRecibido }}</p>
  </div>
</template>

<script>
export default {
  name: 'ParentComponent',
  props: {
    textoRecibido: {
      type: String,
      default: ''
    }
  }
};
</script>
