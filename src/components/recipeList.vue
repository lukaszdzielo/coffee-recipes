<script setup lang="ts">
import recipeCard from './recipeCard.vue';
import recipeModal from './recipeModal.vue';
</script>

<script lang="ts">
export default {
    components: {
        recipeCard,
        recipeModal
    },
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
    mounted() {
        this.modalRecipe = document.querySelector('dialog');
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('recipes.json');
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

<template>
    <div class="recipeList">
        <recipeCard v-for="(recipe, slug) in recipes" :data="recipe" :slug="slug" @open="openModal" />
    </div>
    <recipeModal :recipe="dialogRecipe" @close="closeDialog" />
</template>

<style scoped>
.recipeList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;

    @media (min-width: 576px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 1400px) {
        grid-template-columns: repeat(7, 1fr);
    }
}
</style>