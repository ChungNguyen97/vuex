<template>
  <div class="todo_list">
    <h3>{{ title }}</h3>
    <div class="info" v-if="isLogin">
      <NumberTodoVue />
      <ul class="list">
        <li v-for="todo of getTodos" :key="todo.id">
          {{ todo.title }} - {{ todo.completed }}
        </li>
      </ul>
      <DoneTodos />
      <ProcessBar />
    </div>
    <p v-else class="warnLogin">
      Bạn cần đăng nhập để xem danh sách công việc!
    </p>
  </div>
</template>


<!-- === JS === -->
<script>
import DoneTodos from "./DoneTodos";
import ProcessBar from "./ProcessBar";
import NumberTodoVue from "./NumberTodo.vue";


import {  mapActions, mapGetters } from "vuex";
export default {
  name: "TodoList",
  data() {
    return {
      title: "TO DO LIST",
    };
  },
  components: {
    DoneTodos,
    ProcessBar,
    NumberTodoVue
  },

  computed: {
    ...mapGetters(["getTodos","isLogin"]),
  },
  created() {
    this.getTodo();
  },
  methods: {
    ...mapActions(["getTodo"]),
  },
};
</script>


<!-- === CSS === -->
<style>
.list {
  border: 1px solid blue;
  padding: 10px;
  list-style-type: none;
}
.warnLogin {
  color: red;
  font-style: italic;
}
</style>