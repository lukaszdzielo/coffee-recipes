<template>
	<div class="searchedTags">
		<button @click="clearSearched" class="btn btn--clearKeys">{{ translation.clearFilters?.[lang.current]
			}}</button>
		<button v-for="searchedTag in searchedTags" @click="deleteSearched(searchedTag as string)"
			class="btn btn--removeKey" :key="searchedTag">{{ searchedTag
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
			urlParam: inject('urlParam') as any,
			searchedTags: inject('searchedTags') as Set<string>,
		}
	},
	methods: {
		clearSearched() {
			this.searchedTags.clear();
			this.urlParam.delete('tags');
		},
		deleteSearched(key: string) {
			this.searchedTags.delete(key);
			if (this.searchedTags.size === 0) {
				this.urlParam.delete('tags');
			} else {
				this.urlParam.params.set('tags', `${[...this.searchedTags]}`)
				this.urlParam.update()
			}
		}
	}
}
</script>

<style scoped>
.searchedTags {
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
	color: var(--gray-900);
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

.btn--removeKey {
	padding-inline-end: 1.5rem;
	background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>');
	background-position: calc(100% - .125rem) center;
	background-repeat: no-repeat;
	background-size: 1rem;
}
</style>