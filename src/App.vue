<script setup lang="ts">
import List from './components/List.vue';
</script>

<script lang="ts">

export default {
  data() {
    return {
      recipes: {},
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
</script>

<template>
  <div class="container">
    <List :recipes="recipes" />
  </div>
</template>

<style scoped></style>
