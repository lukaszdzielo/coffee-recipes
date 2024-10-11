<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import RecipeList from './components/RecipeList.vue';
</script>
<script lang="ts">
export default {
  data() {
    return {
      lang: '',
    }
  },
  created() {
    this.lang = navigator.language;
    const localLang = localStorage.getItem('pageLang');
    if (localLang) {
      // this.pageBaseSize = +(localRemSize || this.pageBaseSize)
    }
    this.setHtmlSize();
  },
  methods: {
    setHtmlSize() {
      console.log('test');

      document.documentElement.lang = this.lang
    }
    // if(this.language === '')
  }
}
</script>

<template>
  <AppHeader />
  <div class="container">
    <RecipeList />
  </div>
  <AppFooter />
</template>