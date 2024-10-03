<script lang="ts">
export default {
    props: ['data', 'slug'],
    data() {
        return {
            thumbnailDefault: './recipeCard-placeholder.svg',
        }
    }
}
</script>

<template>
    <div class="recipeCard" @click="$emit('open', data)">
        <img v-if="data.thumbnail" :src="data.thumbnail" :alt="data.name">
        <img v-else="data.thumbnail" :src="thumbnailDefault" :alt="data.name">
        <div class="card__content">{{ data.name }}</div>
    </div>
</template>

<style>
.recipeCard {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 12px;
    padding: 8px;
    background-color: #E0E0E0;
    font-size: 14px;
    cursor: pointer;

    img {
        display: block;
        border-radius: 8px;
        width: 100%;
        max-width: 100%;
    }
}
</style>