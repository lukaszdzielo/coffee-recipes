<template>
    <div class="recipeList">
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
            dialogId: 'recipeModal',
            recipes: {} as any,
            dialogRecipe: {},
            modalElem: document.querySelector('dialog#settingsModal') as HTMLDialogElement | null,
            searchedTags: inject('searchedTags') as Array<string>,
        }
    },
    created() {
        this.fetchData();
    },
    mounted() {
        this.modalElem = document.querySelector(`#${this.dialogId}`);
    },
    computed: {
        filteredRecipes() {
            const filteredObj: any = {};
            const searchedTags: string[] = [...this.searchedTags];

            for (const name in this.recipes) {
                const lang: string = this.getLang(this.recipes[name]);
                const recipe: any = this.recipes[name];
                const tags: string[] = [...recipe.langs[lang].tags];

                const isAllTagsInRecipe = searchedTags.every(tag => tags.includes(tag));

                if (isAllTagsInRecipe) filteredObj[name] = recipe;
            }


            return filteredObj;
        },
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
        getLang(recipe: any) {
            return recipe.langs?.[this.lang.current] ? this.lang.current : recipe.langs?.langDefault;
        }
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