<template>
	<div class="searchWrapper">
		<input type="text" placeholder="Testing..." v-model="inputValue" v-on:keyup.enter="addSearchedTag">
		<button @click="addSearchedTag" class="btn btn--submit">{{ translation.search?.[lang.current] }}</button>
	</div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	data() {
		return {
			lang: inject('lang') as any,
			translation: inject('translation') as any,
			inputValue: '',
			searchedTags: inject('searchedTags') as Set<string>,
			urlParams: new URLSearchParams(window.location.search)
		}
	},
	created() {
		console.log('====', this.urlParams);
	},
	methods: {
		addSearchedTag() {
			if (this.inputValue.trim() === '') return;
			this.searchedTags.add(this.inputValue);

			this.urlParams.set('tags', `${[...this.searchedTags]}`);
			this.urlParams.sort()

			let newPArams = '';
			for (var [key, value] of this.urlParams.entries()) {
				newPArams += `${newPArams === '' ? '?' : '&'}${key}=${value}`;
			}
			history.replaceState(null, '', newPArams);






			// if (this.inputValue.trim() === '') return;
			// this.searchedTags.add(this.inputValue);

			// this.urlParams.set('tags', `${[...this.searchedTags]}`);
			// this.urlParams.sort()
			// history.replaceState(null, '', "?" + this.urlParams.toString());
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