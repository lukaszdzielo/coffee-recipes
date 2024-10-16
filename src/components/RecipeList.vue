<template>
    <div class="recipeList">
        <RecipeCard v-for="(recipe, slug) in recipes" :data="recipe" :slug="slug" @open="openModal"
            @openRecipeModal="openModal" />
    </div>
    <RecipeModal :recipe="dialogRecipe" @close="closeModal" />
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
            dialogId: 'recipeModal',
            recipes: {} as any,
            dialogRecipe: {},
            modalElem: document.querySelector('dialog#settingsModal') as any,
        }
    },
    created() {
        this.fetchData();
    },
    mounted() {
        this.modalElem = document.querySelector(`#${this.dialogId}`);
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
        openModal(slug: string) {
            this.dialogRecipe = this.recipes[slug];
            this.modalElem?.showModal();
        },
        closeModal() {
            this.modalElem?.close();
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