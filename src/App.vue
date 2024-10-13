<template>
  <AppHeader />
  <div class="container">
    <small style="color: var(--gray-300)"><code>App: {{ lang.current }}</code></small>
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
// const setHtmlLang = (lang: any) => {
//   document.documentElement.lang = lang;
// }
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
    this.lang.current = localLang || navigator.language;
    // this.setHtmlLang(this.lang.current)
  },
  methods: {
    // setHtmlLang(lang: any) {
    //   document.documentElement.lang = lang;
    // }
  },
  provide() {
    return {
      lang: this.lang,
      // setHtmlLang,
    }
  }
}
</script>