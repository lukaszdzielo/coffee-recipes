<template>
    <div class="recipeCard">
        <div class="image" style="display: flex;">
            <img v-if="data.thumbnail" :src="data.thumbnail" :alt="data.name">
            <img v-else="data.thumbnail" :src="thumbnailDefault" :alt="data.name">
        </div>
        <div class="content">{{ data.name }}</div>
        <button popovertarget="recipeDialog" @click="$emit('open', data)"></button>
    </div>
</template>

<script lang="ts">
export default {
    props: ['data', 'slug'],
    data() {
        return {
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
    background-color: var(--gray-200);
    font-size: .875rem;
    text-wrap: balance;
    box-sizing: border-box;

    & .image {
        display: flex;
        background-color: var(--gray-300);
        border-radius: .25rem;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
        }
    }

    [popovertarget] {
        position: absolute;
        inset: 0;
        opacity: 0;
        border: 0;
        border-radius: .5rem;
        padding: 0;
        cursor: pointer;
    }
}
</style>