<template>
	<!-- <input type="text" placeholder="Testing..."> -->
	<!-- {{ searchedKeys }} -->
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	data() {
		return {
			searchedKeys: inject('searchedKeys') as any,
		}
	},
	created() {
		console.log('?', this.searchedKeys);
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