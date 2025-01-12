<template>
	<div class="searchWrapper">
		<select @input="change($event)" v-model="selectedOption">
			<option value="">Wybierz składnik...</option>
			<option v-for="(value, key) in notSelectedIngredientTags" :key="key" :value="key">{{ value?.[lang.current]
				}}
			</option>
		</select>

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

<style scoped>
.searchWrapper {
	display: flex;
}

input {
	background: transparent;
	border: 1px solid light-dark(var(--gray-300), var(--gray-700));
	border-width: 1px 0 1px 1px;
	border-radius: .5rem 0 0 .5rem;
	padding: .25rem .5rem;
	width: 100%;
	font-size: 1rem;
	box-sizing: border-box;
}

.btn--submit {
	--borderColor: light-dark(var(--gray-300), var(--gray-700));
	--bg: light-dark(var(--gray-200), var(--gray-700));

	padding: .25rem .5rem;
	border-radius: 0 .5rem .5rem 0;
	font-size: 1rem;
	color: var(--app--color);

	@media (hover:hover) {
		&:hover {
			--bg: light-dark(var(--gray-300), var(--gray-700));
		}
	}

	&:active {
		--borderColor: light-dark(var(--gray-400), var(--gray-700));
		--bg: light-dark(var(--gray-400), var(--gray-700));
	}
}
</style>