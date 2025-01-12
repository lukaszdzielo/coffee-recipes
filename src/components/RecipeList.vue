<template>
    <div v-if="!!Object.keys(filteredRecipes).length" class="recipeList recipeList--list">
        <RecipeCard v-for="(recipe, slug) in filteredRecipes" :data="recipe" :slug="slug" @open="openModal"
            @openRecipeModal="openModal" />
    </div>
    <div v-else class="recipeList recipeList--empty">{{ translation?.noRecipeMatchingSearch?.[lang.current] }}</div>

    <div v-if="searchedTags.length" style="margin-top: 1rem;">Pozostałe przepisy</div>
    <div v-if="!!Object.keys(filteredRecipes).length" class="recipeList recipeList--list">
        <RecipeCard v-for="(recipe, slug) in filteredRecipes" :data="recipe" :slug="slug" @open="openModal"
            @openRecipeModal="openModal" />
    </div>

    <RecipeModal :recipe="dialogRecipe" @close="closeModal" />
</template>

<script setup lang="ts">
import RecipeCard from './RecipeCard.vue';
import RecipeModal from './RecipeModal.vue';
</script>

<script lang="ts">
import { inject } from 'vue';

export default {
    props: ['item'],
    data() {
        return {
            lang: inject('lang') as any,
            translation: inject('translation') as any,
            recipes: {} as { [name: string]: {} },
            dialogRecipe: {},
            modalElem: document.querySelector('dialog#settingsModal') as HTMLDialogElement | null,
            searchedTags: inject('searchedTags') as string[],
        }
    },
    async created() {
        this.recipes = await this.fetchData('recipes/recipes.json');
    },
    mounted() {
        this.modalElem = document.querySelector(`#recipeModal`);
    },
    computed: {
        filteredRecipes() {
            const filteredObj: any = {};
            const searchedTags: string[] = [...this.searchedTags];

            for (const name in this.recipes) {
                const recipe: any = this.recipes[name];
                const tags: string[] = [...recipe.tags];

                const isAllTagsInRecipe = searchedTags.every(tag => tags.includes(tag));
                if (isAllTagsInRecipe) filteredObj[name] = recipe;
            }

            return filteredObj;
        },
        filteredNotMatchedRecipes() {

        }
    },
    methods: {
        async fetchData(url: string) {
            try {
                const response = await fetch(url);
                return await response.json();
            } catch (error) {
                console.error(error);
                return {}
            }
        },
        openModal(slug: string) {
            this.dialogRecipe = this.recipes[slug];
            this.modalElem?.showModal();
        },
        closeModal() {
            this.modalElem?.close();
        },
        getLang(recipe: any) {
            return recipe.langs?.[this.lang.current] ? this.lang.current : recipe.langs?.langDefault;
        },
    }
}
</script>

<style scoped>
.recipeList {
    &.recipeList--list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8.5rem, 1fr));
        flex-wrap: wrap;
        gap: .75rem;
        margin-top: 1rem;
    }

    &.recipeList--empty {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        text-align: center;
    }
}
</style>