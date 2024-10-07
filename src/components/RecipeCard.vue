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
    <div class="recipeCard">
        <div class="image" style="display: flex;">
            <img v-if="data.thumbnail" :src="data.thumbnail" :alt="data.name">
            <img v-else="data.thumbnail" :src="thumbnailDefault" :alt="data.name">
        </div>
        <div class="content">{{ data.name }}</div>
        <button popovertarget="recipeDialog" @click="$emit('open', data)"></button>
    </div>
</template>

<style scoped>
.recipeCard {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-radius: .5rem;
    padding: .75rem;
    background-color: #E0E0E0;
    font-size: .875rem;
    transition: box-shadow .3s;
    text-wrap: balance;

    & .image {
        display: flex;
        background-color: #BDBDBD;
        border-radius: .25rem;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
        }
    }

    &:hover {
        box-shadow: inset 0 0 0 1px #212121;
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