<template>
  <div class="number_todo">
    <h3>Chọn số lượng product muốn xem:</h3>
    <input type="number" name="number" id="number" v-model="number"  />
    <button @click="handleShowProductByNumber()">Xem {{number}}</button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
export default {
  name: "NumberTodo",
  data() {
    return {
      number:10
    };
  },
  methods: {
    handleShowProductByNumber(){
      console.log('run');
      this.$store.commit('SET_TODOS',this.number)
    },
    // ...mapMutations(['SET_TODOS'])
  }
};
</script>

<style scope >
.number_todo {
  border: 1px solid blue;
  padding:12px
}
</style>