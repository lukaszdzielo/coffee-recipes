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
			searchedTags: new Set<string>() as any,
		}
	},
	async created() {
		const browserLang = navigator.language.split('-')[0];
		await this.fetchData();
		const langList = this.translation.langList;
		this.lang.default = langList.find(lang => lang === browserLang) ? browserLang : langList[0];
		this.lang.current = localStorage.getItem('pageLang') || this.lang.default;
		document.documentElement.lang = this.lang.current;

		console.log('1', this.searchedTags);
		this.searchedTags.set('tags', this.getUrlParams('tags'))
		//  = new Set<string>(this.getUrlParams('tags'));
		console.log('2', this.searchedTags);

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
		getUrlParams(key: string) {
			return this.urlParams.get(key)?.split(',');
		},
		langChange(newLang: '') {
			this.lang.current = newLang;
			document.documentElement.lang = newLang;
		},
		setNewUrlParam(key: string, value: string) {
			const isEmpty = value.trim() === '';
			const isAlreadyInTags = this.urlParams.get(key)?.split(',').find((elem: string) => elem === value);

			if (isEmpty || isAlreadyInTags) return;

			this.searchedTags.add(value);

			this.urlParams.set(key, `${[...this.searchedTags]}`);
			this.urlParams.sort()

			let newPArams = '';
			for (var [key, value] of this.urlParams.entries()) {
				newPArams += `${newPArams === '' ? '?' : '&'}${key}=${value}`;
			}
			history.replaceState(null, '', newPArams);
		}
	},

	provide() {
		return {
			'translation': this.translation,
			'lang': this.lang,
			'langChange': this.langChange,
			'searchedTags': this.searchedTags,
			'urlParams': this.urlParams,
			'setNewUrlParam': this.setNewUrlParam,
		}
	}
}
</script>