<template>
  <AppHeader />
  <div class="container">
    <small style="color: var(--gray-300)"><code>App: {{ lang }}</code></small>
    <RecipeList />
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import RecipeList from './components/RecipeList.vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      lang: {
        default: '',
        current: '',
        langText: {},
      }
    }
  },
  created() {
    this.lang.default = navigator.language;
    const localLang = localStorage.getItem('pageLang');
    this.lang.current = localLang || this.lang.default;

    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('./langs.json');
        const json = await response.json();
        this.lang.langText = json || {};
      } catch (error) {
        console.error(error);
      }
    }
  },
  provide() {
    return {
      lang: this.lang,
    }
  }
}
</script>