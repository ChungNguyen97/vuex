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
.container{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
