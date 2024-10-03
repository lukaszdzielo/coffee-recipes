<script setup lang="ts">
import Card from './RecipeCard.vue';
import Dialog from './Modal.vue';
</script>

<script lang="ts">
export default {
    components: {
        Card,
        Dialog
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
            this.modalRecipe?.showModal();
        },
        closeDialog() {
            this.modalRecipe?.close();
            this.dialogRecipe = {};
        },
    }
}
</script>

<template>
    <div class="list">
        <Card v-for="(recipe, slug) in recipes" :data="recipe" :slug="slug" @open="openModal" />
    </div>
    <Dialog :recipe="dialogRecipe" @close="closeDialog" />
</template>

<style>
.list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

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