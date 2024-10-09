<script setup lang="ts">
import Header from './components/Header.vue';
import RecipeList from './components/RecipeList.vue';
</script>

<script lang="ts">
export default {
  components: {
    Header,
    RecipeList
  },
}
</script>

<template>
  <Header />
  <div class="container">
    <RecipeList />
  </div>
</template>

<style scoped></style>
