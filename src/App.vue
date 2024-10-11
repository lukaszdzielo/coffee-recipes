<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import RecipeList from './components/RecipeList.vue';
</script>

<template>
  <AppHeader />
  <div class="container">
    <RecipeList />
  </div>
<AppFooter />
</template>