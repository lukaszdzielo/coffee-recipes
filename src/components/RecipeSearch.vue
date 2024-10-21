<template>
	<div class="searchWrapper">
		<input type="text" placeholder="Testing..." v-model="inputValue" v-on:keyup.enter="addSearchedKey">
		<button @click="addSearchedKey" class="btn btn--submit">Submit</button>
	</div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	inject: ['searchedKeys'],
	data() {
		return {
			inputValue: '',
			searchedKeys: inject('searchedKeys') as Set<string>,
		}
	},
	created() {
		// this.searchedKeys.add('asd');
	},
	methods: {
		addSearchedKey() {
			if (this.inputValue.trim() === '') return;
			this.searchedKeys.add(this.inputValue);
			this.inputValue = ''
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
	border: 1px solid var(--gray-300);
	border-radius: 0 .5rem .5rem 0;
	font-size: 1rem;

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