<template>
	<input type="text" placeholder="Testing..." v-model="inputValue" v-on:keyup.enter="addSearchedKey">
	<button @click="addSearchedKey">Submit</button>
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
input {
	border: 1px solid red;
	border-radius: .5rem;
	padding: .25rem .5rem;
	width: 100%;
	font-size: 1rem;
	box-sizing: border-box;
}
</style>