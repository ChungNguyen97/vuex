<template>
  <div id="app">
    <HeaderPage />
    <router-view />
  </div>
</template>

<script>
import HeaderPage from '@/components/common/HeaderPage'

export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
