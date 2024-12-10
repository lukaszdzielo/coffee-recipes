<template>
	<div class="searchedTags">
		<button @click="clearSearched" class="btn btn--clearKeys">{{ translation?.filters?.clearFilters?.[lang.current]
			}}</button>
		<button v-for="tag in searchedTags" @click="deleteSearched(tag as string)" class="btn btn--removeKey"
			:key="tag">{{ tag }}</button>
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
			searchedTags: inject('searchedTags') as string[],
			searchedTag: inject('searchedTag') as [],
		}
	},
	methods: {
		clearSearched() {
			this.searchedTags.length = 0;
			this.urlParam.delete('tags');
		},
		deleteSearched(key: string) {
			this.searchedTags.splice(this.searchedTags.indexOf(key), 1)
			if (this.searchedTags.length === 0) {
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
	--borderColor: light-dark(var(--gray-200), var(--gray-700));
	--bg: light-dark(var(--gray-200), var(--gray-700));
	border-radius: .375rem;
	padding: .25rem .75rem;
	color: var(--app--color);
	font-size: 1rem;

	&:not(:disabled) {
		@media (hover:hover) {
			&:hover {
				--borderColor: light-dark(var(--gray-300), var(--gray-600));
			}
		}

		&:active {
			--borderColor: light-dark(var(--gray-400), var(--gray-500));
		}
	}

	&:disabled {
		opacity: 1;
		--borderColor: light-dark(var(--gray-300), var(--gray-500));
		--bg: light-dark(var(--gray-200), var(--gray-800));
		--color: light-dark(var(--gray-400), var(--gray-600));
	}
}

.btn--removeKey {
	position: relative;
	padding-inline-end: 2rem;

	&:after {
		content: '';
		position: absolute;
		top: 50%;
		right: .25rem;
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>');
		background: var(--app--color);
		translate: 0 -50%;
	}
}
</style>