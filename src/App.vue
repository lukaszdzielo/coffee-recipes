<template>
	<AppHeader />
	<main class="container">
		<RecipeSearch />
		<SearchedTags v-show="searchedTags.length" />
		<RecipeList />
	</main>
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
			searchedTags: [] as string[],

			searchObj: {
				tags: [] as string[],
				minOneIngredient: false as Boolean,
			}
		}
	},
	async created() {
		this.langHandler();
		this.getUrlTagsParam()
	},
	methods: {
		async fetchData(url: string) {
			try {
				const response = await fetch(url);
				return await response.json();
			} catch (error) {
				console.error(error);
			}
		},
		async langHandler() {
			const browserLang = navigator.language.split('-')[0];
			Object.assign(this.translation, await this.fetchData('./langs.json'))
			const langList = this.translation.langList;
			this.lang.default = langList.find(lang => lang === browserLang) ? browserLang : langList[0];
			this.lang.current = localStorage.getItem('pageLang') || this.lang.default;
			document.documentElement.lang = this.lang.current;
		},
		langChange(newLang: string) {
			this.lang.current = newLang;
			document.documentElement.lang = newLang;
		},
		getUrlTagsParam() {
			const tags = 'tags';
			if (this.urlParams.has(tags) && this.urlParams.get(tags)?.length) {
				const urlTags = this.urlParams.get(tags)?.split(',') || [];
				const unique = [...new Set(urlTags.map(elem => elem.toLowerCase()))];
				this.searchedTags.push(...unique);

				if (urlTags.length !== unique.length) {
					this.urlParams.set('tags', `${this.searchedTags}`);
					this.updateUrlParam()
				};
			}

			const minOneIngredient = 'minOneIngredient';
			if (this.urlParams.has(minOneIngredient)) {
				this.searchObj.minOneIngredient = !!this.urlParams.get(minOneIngredient)
			}
		},
		updateUrlParam() {
			let params: string = '';
			for (var [key, value] of this.urlParams.entries()) {
				params += `${params === '' ? '?' : '&'}${key}=${value}`;
			}
			history.replaceState(null, '', params);
		},
		deleteUrlParam(key: string) {
			this.urlParams.delete(key);
			(this.urlParams.size > 0) ? this.updateUrlParam() : this.clearUrlParams();
		},
		clearUrlParams() {
			history.replaceState(null, '', window.location.href.split('?')[0]);
		}
	},

	provide() {
		return {
			'translation': this.translation,
			'lang': this.lang,
			'langChange': this.langChange,
			'searchedTags': this.searchedTags,
			'searchObj': this.searchObj,
			'urlParam': {
				params: this.urlParams,
				update: this.updateUrlParam,
				delete: this.deleteUrlParam,
				clear: this.clearUrlParams,
			},
		}
	}
}
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
}
</style>