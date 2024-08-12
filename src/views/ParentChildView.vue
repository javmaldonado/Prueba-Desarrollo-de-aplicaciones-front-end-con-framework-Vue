<template>
  <div>
    <h2>Comunicación entre componentes:</h2>
   <h3>Mensaje enviado por Child:</h3>
    <ChildComponent @texto-enviado="mostrarTexto" />
    <h3>Mensaje recibido por Parent:</h3>
    <ParentComponent :textoRecibido="textoRecibido" />
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';
import ParentComponent from '@/components/ParentComponent.vue';

export default {
  name: 'ParentChildView',
  components: {
    ChildComponent,
    ParentComponent
  },
  data() {
    return {
      textoRecibido: ''
    };
  },
  methods: {
    mostrarTexto(texto) {
      this.textoRecibido = texto;
    }
  }
};
</script>
