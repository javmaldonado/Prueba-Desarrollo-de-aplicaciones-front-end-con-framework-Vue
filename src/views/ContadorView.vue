<template>
  <div class="counter">
    <ContadorComponent/>
  </div>
</template>

<script>
import ContadorComponent from '@/components/ContadorComponent.vue'

export default {
  name: 'CounterView',
  components: {
 ContadorComponent,
  }
}
</script>
