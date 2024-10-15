<template>
  <AppHeader />
  <div class="container">
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
        translation: {},
      },
      translation: {},
    }
  },
  created() {
    this.lang.default = navigator.language;
    const localLang = localStorage.getItem('pageLang');
    this.lang.current = localLang || this.lang.default;
    document.documentElement.lang = this.lang.current;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('./langs.json');
        const json = await response.json();
        this.lang.translation = json || {};
        Object.assign(this.translation, json)
      } catch (error) {
        console.error(error);
      }
    },
  },

  provide() {
    return {
      'translation': this.translation,
      'lang': this.lang,
      'langChange': (newLang: '') => {
        this.lang.current = newLang;
        document.documentElement.lang = newLang;

      },
    }
  }
}
</script>