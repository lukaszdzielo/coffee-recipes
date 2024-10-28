<template>
	<AppHeader />
	<div class="container">
		<RecipeSearch />
		<SearchedTags v-show="searchedTags.size" />
		<RecipeList />
	</div>
	<AppFooter />
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import RecipeSearch from './components/RecipeSearch.vue';
import SearchedTags from './components/SearchedTags.vue';
import RecipeList from './components/RecipeList.vue';
</script>

<script lang="ts">
export default {
	data() {
		return {
			lang: {
				default: '',
				current: '',
			},
			translation: {
				langList: [],
			},
			urlParams: new URLSearchParams(window.location.search),
			searchedTags: new Set<string>(),
		}
	},
	async created() {
		const browserLang = navigator.language.split('-')[0];
		await this.fetchData();
		const langList = this.translation.langList;
		this.lang.default = langList.find(lang => lang === browserLang) ? browserLang : langList[0];
		this.lang.current = localStorage.getItem('pageLang') || this.lang.default;
		document.documentElement.lang = this.lang.current;

		this.getUrlParam('tags')
	},
	methods: {
		async fetchData() {
			try {
				const response = await fetch('./langs.json');
				const json = await response.json();
				Object.assign(this.translation, json)
			} catch (error) {
				console.error(error);
			}
		},

		langChange(newLang: '') {
			this.lang.current = newLang;
			document.documentElement.lang = newLang;
		},

		getUrlParam(key: string) {
			if (this.urlParams.has(key) && this.urlParams.get(key)?.length) {
				this.urlParams.get(key)?.split(',')?.forEach(param => {
					this.searchedTags.add(param);
				})
			}
		},

		addUrlParam(key: string, value: string) {


			this.urlParams.set(key, value);

			let newPArams = '';
			for (var [key, value] of this.urlParams.entries()) {
				newPArams += `${newPArams === '' ? '?' : '&'}${key}=${value}`;
			}
			this.changeUrlParams(newPArams);
		},

		changeUrlParams(params: string) {
			history.replaceState(null, '', params);
		},
		removeUrlParam() {
			console.log('removeUrlParams');
		},
		clearUrlParams() {
			console.log('clearUrlParams');
		}
	},

	provide() {
		return {
			'translation': this.translation,
			'lang': this.lang,
			'langChange': this.langChange,
			'searchedTags': this.searchedTags,
			'urlParam': {
				get: this.getUrlParam,
				add: this.addUrlParam,
				remove: this.removeUrlParam,
				clear: this.clearUrlParams,
			},
		}
	}
}
</script>