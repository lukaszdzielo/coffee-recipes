<template>
	<button>Clear</button>
	<div>{{ searchedKeys }}</div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	inject: ['searchedKeys'],
	data() {
		return {
			searchedKeys: inject('searchedKeys') as any,
		}
	},
	created() {
		console.log('??', this.searchedKeys);
		this.searchedKeys.add('asd');
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