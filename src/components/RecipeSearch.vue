<template>
	<div class="searchWrapper">
		<input type="text" :placeholder="translation?.filters?.searchPlaceholder?.[lang.current]" v-model="inputValue"
			v-on:keyup.enter="addTag(inputValue.toLowerCase())">
		<button @click="addTag(inputValue.toLowerCase())" class="btn btn--submit">{{
			translation?.filters?.search?.[lang.current] }}</button>
	</div>
	<!-- <div class="formControl">
		<input type="checkbox" name="" id="languageSearch">
		<label for="languageSearch">{{ translation?.filters?.searchOtherLang?.[lang.current] }}</label>
	</div> -->
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	data() {
		return {
			lang: inject('lang') as any,
			translation: inject('translation') as any,
			inputValue: '',
			searchedTags: inject('searchedTags') as Array<string>,
			urlParam: inject('urlParam') as any,
		}
	},
	methods: {
		addTag(value: string) {
			const isEmpty = value.trim() === '';
			const isAlreadyInTags = this.searchedTags.find(elem => elem === value);
			if (isEmpty || isAlreadyInTags) return;

			this.searchedTags.push(value);
			this.searchedTags.sort();

			this.urlParam.params.set('tags', `${this.searchedTags}`);
			this.urlParam.update();

			this.inputValue = '';
		}
	}
}
</script>

<style scoped>
.searchWrapper {
	display: flex;
	margin-top: 1rem;
}

input {
	border: 1px solid var(--gray-300);
	border-width: 1px 0 1px 1px;
	border-radius: .5rem 0 0 .5rem;
	padding: .25rem .5rem;
	width: 100%;
	font-size: 1rem;
	box-sizing: border-box;
}

.btn--submit {
	--main: var(--gray-200);
	border: 1px solid var(--gray-300);
	padding: .25rem .5rem;
	border-radius: 0 .5rem .5rem 0;
	font-size: 1rem;
	color: var(--gray-900);

	@media (hover:hover) {
		&:hover {
			--main: var(--gray-300);
		}
	}

	&:active {
		--main: var(--gray-400);
	}
}
</style>