<template>
  <div class="done_todo">
    <h3>{{ title }}</h3>
    <ul class="list_done">
      <li v-for="todo in getDoneTodos" :key="todo.id">
          {{todo.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "DoneTodos",
  data() {
    return {
      title: "Công việc đã hoàn thành",
    };
  },
  computed: mapGetters(['getDoneTodos'])
};
</script>

<style>
.done_todo{
  border: 1px solid red;
  padding:10px;
  margin:12px auto
}
</style>