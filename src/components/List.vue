<script setup lang="ts">
import Card from './Card.vue';
import Dialog from './Dialog.vue';
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
        }
    },
    created() {
        this.fetchData();
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
        openModal(recipeSlug: String) {
            this.dialogRecipe = this.recipes[recipeSlug];
        },
        closeDialog() {
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
    gap: 16px;
}
</style>