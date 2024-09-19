<script lang="ts">
export default {
    props: ['recipe'],
}
</script>

<template>

    <dialog class="recipeDialog" :open="!!Object.keys(recipe).length">
        <button class="recipeDialog__close" @click="$emit('close')">Close</button>
        <div v-show="recipe.name" class="recipeDialog__name">{{ recipe.name }}</div>
        <div v-show="recipe.ingredients" class="recipeDialog__ingredients">{{ recipe.ingredients }}</div>
        <div v-show="recipe.preparation" class="recipeDialog__preparation">{{ recipe.preparation }}</div>
    </dialog>
</template>