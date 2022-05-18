<template>
  <header class="header">
    <nav class="nav container">
      <router-link to="/">Home</router-link>
      <router-link to="/todolist">Todo list</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name:"HeaderPage",

}
</script>

<style>
  header.header{
    border: 1px solid  #333;

  }
  header  a {
    display: inline-block;
    padding: 5px 12px;
  }
</style>