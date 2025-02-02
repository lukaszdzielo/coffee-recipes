<template>
	<div class="recipeCard" @click="$emit('openRecipeModal', slug)">
		<div class="image" style="display: flex;">
			<img v-if="data.thumbnail" :src="data.thumbnail" :alt="data.name">
			<img v-else="data.thumbnail" :src="thumbnailDefault" :alt="data.name">
			<span v-if="!data.langs?.[lang.current]" class="langInfo">{{ data.langs.langDefault.toUpperCase() }}</span>
		</div>
		<div class="content">{{ data.langs?.[lang.current]?.name || data.langs?.[data.langs.langDefault]?.name }}</div>
	</div>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
	props: ['data', 'slug'],
	data() {
		return {
			lang: inject('lang') as any,
			thumbnailDefault: 'recipes/img/recipeCard-placeholder.svg',
		}
	}
}
</script>

<style scoped>
.recipeCard {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: .5rem;
	border-radius: .5rem;
	padding: .75rem;
	background-color: var(--recipeCard--bg);
	font-size: .875rem;
	text-wrap: balance;
	box-sizing: border-box;
	cursor: pointer;

	& .image {
		position: relative;
		display: flex;
		width: 100%;
		aspect-ratio: 1/1;
		border-radius: .25rem;
		overflow: hidden;

		img {
			display: block;
			width: 100%;
			max-width: 100%;
			height: auto;
		}
	}
}

.langInfo {
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 0 .25rem 0 0;
	padding: .25rem .5rem .25rem;
	background-color: var(--recipeCard--bg);
	font-size: 0.75rem;
}
</style>