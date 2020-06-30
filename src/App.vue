<template>
  <div id="app">
    <VHeader />
    <main>
      <router-view/>
    </main>
    <VFooter />
  </div>
</template>

<script>
import VHeader from '@layout/VHeader'
import VFooter from '@layout/VFooter'
export default {
  name: 'App',
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style>
@import './assets/css/custom.css';
</style>
