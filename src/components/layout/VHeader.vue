<template>
  <header class="header">
    <div class="container">
      <h2>G3neR@te_rAndoM_Pa$5w0rD</h2>
      <VPasswordGeneratorForm />
    </div>
  </header>
</template>

<script>
import VPasswordGeneratorForm from '@common/VPasswordGeneratorForm'
export default {
  name: 'VHeader',
  components: {
    VPasswordGeneratorForm
  }
}
</script>
