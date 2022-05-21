<template>
  <header class="header">
    <nav class="nav container">
      <router-link to="/">Home</router-link>
      <router-link to="/todolist">Todo list</router-link>
      <span v-if="isLogin">
        <span><strong>Số lượng todo:</strong> {{ getTodos.length }}</span>
        <span><strong>Author</strong>: {{ userModule.author }}</span>
        
        <button @click="TOGGLE_AUTH()">Đăng xuất</button>
        <img v-bind:src="userModule.avartar" alt="Avarta" />

      </span>
      <button @click="handleLogin()" v-else>Đăng nhập</button>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "HeaderPage",
  data() {
    return {
      img:''
    };
  },
  computed: { ...mapState(["userModule"]),
    ...mapGetters(["isLogin","getTodos"]),
   },

   methods: {
     ...mapMutations(['TOGGLE_AUTH']),
     handleLogin(){
       this.$store.commit('TOGGLE_AUTH')
     }
   }

  // computed: {
  //   totalTodos(){
  //     return this.$store.state.todos.length
  //   },
  //   getAuthor(){
  //     return this.$store.state.author
  //   },
  //   isLogin(){
  //     return this.$store.state.auth.isAuthenticated
  //   }
  // }
};
</script>

<style>
header.header {
  border: 1px solid #333;
}
header a {
  display: inline-block;
  padding: 5px 12px;
}
header span {
  margin: 0 12px 0 0;
}
header img{
  width: 5%;
  top: 10px;
}
</style>