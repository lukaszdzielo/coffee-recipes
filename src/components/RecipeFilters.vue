<template>
	<div class="searchedKeys">
		<button @click="clearSearched" class="btn btn--clearKeys">{{ translation.clearFilters?.[lang.current]
			}}</button>
		<button v-for="searchedKey in searchedKeys" @click="deleteSearched(searchedKey)" class="btn btn--removeKey"
			:key="searchedKey">{{ searchedKey
			}}</button>
	</div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	data() {
		return {
			lang: inject('lang') as any,
			translation: inject('translation') as any,
			searchedKeys: inject('searchedKeys') as Set<string>,
		}
	},
	created() {
		// this.searchedKeys.add('123');
	},
	methods: {
		clearSearched() {
			this.searchedKeys.clear();
		},
		deleteSearched(key: '') {
			this.searchedKeys.delete(key)
		}
	}
}
</script>

<style scoped>
.searchedKeys {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 8px;
}

button {
	--main: var(--gray-200);
	border: 0;
	border-radius: .375rem;
	padding: .375rem .5rem;

	@media (hover:hover) {
		&:hover {
			--main: var(--gray-300);
		}
	}

	&:active {
		--main: var(--gray-400);
	}
}

.btn--removeKey {
	padding-inline-end: 1.5rem;
	background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>');
	background-position: calc(100% - .125rem) center;
	background-repeat: no-repeat;
	background-size: 1rem;
}
</style>