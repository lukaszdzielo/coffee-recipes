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
        <div class="recipeCard__image" style="display: flex;">
            <img v-if="data.thumbnail" :src="data.thumbnail" :alt="data.name">
            <img v-else="data.thumbnail" :src="thumbnailDefault" :alt="data.name">
        </div>
        <div class="card__content">{{ data.name }}</div>
    </div>
</template>

<style scoped>
.recipeCard {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    padding: 8px;
    background-color: #E0E0E0;
    font-size: 14px;
    cursor: pointer;

    & .recipeCard__image {
        display: flex;
        background-color: #BDBDBD;
        border-radius: 4px;
        overflow: hidden;

        img {
            width: 100%;
            max-width: 100%;
            height: auto;
        }
    }
}
</style>