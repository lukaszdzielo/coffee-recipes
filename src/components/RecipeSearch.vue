<template>
	<div class="customSelect">
		<div class="customSelect">
			<select @input="tagsChange($event)" v-model="selectedOption">
				<option value="">{{ translation?.search_selectIngredient?.[lang.current] }}</option>
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
	<div class="customCheckbox">
		<input type="checkbox" id="search" @input="inputChange($event)" v-model="searchObj.minOneIngredient">
		<label for="search">{{ translation?.search_minOneIngredient?.[lang.current] }}</label>
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
			searchObj: inject('searchObj') as any,
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
		tagsChange(e: any) {
			const isEmpty = e?.target?.value.trim() === '';
			if (isEmpty) return;
			this.searchedTags.push(e?.target?.value);
			this.searchedTags.sort();

			this.urlParam.params.set('tags', `${this.searchedTags}`);
			this.urlParam.update();

			this.selectedOption = '';
		},
		inputChange(e: any) {
			if (e.target.checked) {
				this.urlParam.params.set('minOneIngredient', true);
			} else {
				this.urlParam.delete('minOneIngredient');
			}

			this.urlParam.update();
		}
	}
}
</script>

<style scoped>
.customCheckbox {
	margin-top: 8px;
}
</style>