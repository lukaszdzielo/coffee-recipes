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
    gap: .5rem;
    border-radius: .5rem;
    padding: .5rem;
    background-color: #E0E0E0;
    font-size: .625rem;
    cursor: pointer;
    transition: scale .1s;

    & .recipeCard__image {
        display: flex;
        background-color: #BDBDBD;
        border-radius: .25rem;
        overflow: hidden;

        img {
            width: 100%;
            max-width: 100%;
            height: auto;
        }
    }

    &:hover {
        scale: 1.03;
    }

    &:is(:active, :focus) {
        scale: 0.97;
    }
}
</style>