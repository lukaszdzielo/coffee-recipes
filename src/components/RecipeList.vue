<template>
    <div class="recipeList">
        <RecipeCard v-for="(recipe, slug) in recipes" :data="recipe" :slug="slug" @open="openModal" />
    </div>
    <RecipeModal :recipe="dialogRecipe" @close="closeDialog" />
</template>

<script setup lang="ts">
import RecipeCard from './RecipeCard.vue';
import RecipeModal from './RecipeModal.vue';
</script>

<script lang="ts">
export default {
    props: ['item'],
    data() {
        return {
            recipes: {},
            dialogRecipe: {},
            modalRecipe: document.querySelector('dialog'),
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('recipes/recipes.json');
                this.recipes = await response.json();
            } catch (error) {
                console.error(error);
            }
        },
        openModal(recipeSlug: { name: String }) {
            this.dialogRecipe = recipeSlug;
        },
        closeDialog() {
            this.dialogRecipe = {};
        },
    }
}
</script>

<style scoped>
.recipeList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8.5rem, 1fr));
    flex-wrap: wrap;
    gap: .75rem;
    margin-top: 1rem;
}
</style>