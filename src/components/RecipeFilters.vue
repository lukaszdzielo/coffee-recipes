<template>
	<div>{{ searchedKeys }}</div>
	<div class="searchedKeys">
		<button>{{ translation.clearFilters?.[lang.current] }}</button>
		<button v-for="searchedKey in searchedKeys">{{ searchedKey }}</button>
	</div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	data() {
		return {
			lang: inject('lang') as any,
			translation: inject('translation') as any,
			searchedKeys: inject('searchedKeys') as any,
		}
	},
	created() {
		this.searchedKeys.add('123');
	},
	methods() {

	}
}
</script>

<style scoped>
.searchedKeys {
	display: flex;
	gap: 8px;
}
</style>