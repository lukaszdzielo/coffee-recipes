<template>
	<div class="customSelect">
		<div class="customSelect">
			<select @input="change($event)" v-model="selectedOption">
				<option value="">Wybierz składnik...</option>
				<option v-for="(value, key) in notSelectedIngredientTags" :key="key" :value="key">{{
					value?.[lang.current]
				}}
				</option>
			</select>
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
				fill="undefined">
				<path
					d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" />
			</svg>
		</div>
	</div>
	<div>
		<input type="checkbox" id="search" v-model="searchTagObj.minOneIngredient">
		<label for="search">Find a recipe with at least one of the ingredients you are looking for</label>
	</div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	data() {
		return {
			lang: inject('lang') as any,
			translation: inject('translation') as any,
			searchTags: {} as any,
			searchedTags: inject('searchedTags') as string[],
			urlParam: inject('urlParam') as any,
			selectedOption: '',
			searchTagObj: inject('searchTagObj') as any,
		}
	},
	async created() {
		this.searchTags = await this.fetchData('recipes/ingredientsTags.json');
	},
	computed: {
		notSelectedIngredientTags() {
			const notSelected = Object.keys(this.searchTags).filter(key => !this.searchedTags.includes(key));
			const filteredObj: any = {};
			notSelected.forEach(key => filteredObj[key] = this.searchTags[key]);
			return filteredObj;
		}
	},
	methods: {
		async fetchData(url: string) {
			try {
				const response = await fetch(url);
				return await response.json();
			} catch (error) {
				console.error(error);
				return {}
			}
		},
		change(e: any) {
			const isEmpty = e?.target?.value.trim() === '';
			if (isEmpty) return;
			this.searchedTags.push(e?.target?.value);
			this.searchedTags.sort();

			this.urlParam.params.set('tags', `${this.searchedTags}`);
			this.urlParam.update();

			this.selectedOption = '';
		},
	}
}
</script>