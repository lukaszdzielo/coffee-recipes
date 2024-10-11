<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import RecipeList from './components/RecipeList.vue';
</script>
<script lang="ts">
export default {
  // data() {
  //   return {
  //     pageLang: 'en',
  //   }
  // },
  // created() {
  //   this.pageLang = navigator.language;
  //   const localLang = localStorage.getItem('pageLang');
  //   if (localLang) {
  //     // this.pageBaseSize = +(localRemSize || this.pageBaseSize)
  //   }
  //   this.setHtmlSize();
  // },
  // methods: {
  //   setHtmlSize() {
  //     document.documentElement.lang = this.pageLang
  //   }
  // }
}
</script>

<template>
  <AppHeader />
  <div class="container">
    <RecipeList />
  </div>
  <AppFooter />
</template>