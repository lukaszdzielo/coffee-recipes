<script setup lang="ts">
import List from './components/List.vue';
// import Card from './components/Card.vue'; 
</script>

<!-- <script lang="ts">

export default {
  props: {

  },
  data() {
    return {
      recipes: "",
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('recipes.json');
        this.recipes = await response.json();

      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script> -->

<template>
  <div class="container">
    <List></List>
  </div>
</template>

<style scoped></style>
