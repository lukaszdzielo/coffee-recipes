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



export default {
  data() {
    return {
      lang: {
        default: '',
        current: '',
        translation: {},
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
        this.lang.translation = json || {};
        console.log('?', this.lang.translation);

      } catch (error) {
        console.error(error);
      }
    },
  },

  provide() {
    return {
      'langChange': (newLang: '') => this.lang.current = newLang,
    }
  }
}
</script>















<!-- <template>
  <button @click="incrementCount">+</button>
  <AppHeader />
  <div class="container">
    <div><small style="color: var(--gray-300)"><code>App: {{ lang.current }}</code></small></div>
    <div><small style="color: var(--gray-300)"><code>App: {{ count }}</code></small></div>
    <div><small style="color: var(--gray-300)"><code>App: {{ firstName }} {{ lastName }}</code></small></div>
    <RecipeList />
  </div>
  <AppFooter />
</template>

<script lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import RecipeList from './components/RecipeList.vue';
import { provide, ref, reactive, toRefs } from 'vue';

export default {
  components: {
    AppFooter, AppHeader, RecipeList
  },
  setup() {
    const count = ref(0);
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne'
    });

    function incrementCount() {
      count.value++
    }

    provide('c_userName', '123123123')
    provide('c_count', count)
    provide('c_state', state)
    provide('incrementCount', incrementCount)

    return {
      count,
      ...toRefs(state),
      incrementCount
    }
  },
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
}
</script> -->