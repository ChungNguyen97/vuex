<template>
  <div class="process_bar">
    <h3>Tiến độ hoàn thành: {{ processBar }} %</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProcessBar",

  computed: {
    ...mapGetters(["processBar"]),
  
  },
};
</script>

<style>
</style>