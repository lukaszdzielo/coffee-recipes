<template>
    <div v-if="!!Object.keys(filteredRecipes).length" class="recipeList recipeList--list">
        <RecipeCard v-for="(recipe, slug) in filteredRecipes" :data="recipe" :slug="slug" @open="openModal"
            @openRecipeModal="openModal" />
    </div>
    <div v-else class="recipeList recipeList--empty">{{ translation?.noRecipeMatchingSearch?.[lang.current] }}</div>
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
            dialogId: 'recipeModal',
            recipes: {} as { [name: string]: {} },
            dialogRecipe: {},
            modalElem: document.querySelector('dialog#settingsModal') as HTMLDialogElement | null,
            searchedTags: inject('searchedTags') as string[],
            ingredientsTags: {} as any,
        }
    },
    async created() {
        this.recipes = await this.fetchData('recipes/recipes.json');
        this.ingredientsTags = await this.fetchData('recipes/ingredientsTags.json');


        // Object.values(this.recipes).forEach(recipe => {
        // console.log('?', this.ingredientsTags?.[recipe?.ingredientsTags]);
        // console.log(recipe?.ingredientsTags);
        // })

        // this.sortIngredients();

    },
    mounted() {
        this.modalElem = document.querySelector(`#${this.dialogId}`);
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

        sortIngredients() {
            const sortedKeys = Object.keys(this.ingredientsTags).sort();

            const sortedObject: any = {};
            for (const key of sortedKeys) {
                sortedObject[key] = {};

                for (const lang in this.ingredientsTags[key]) {
                    sortedObject[key][lang] = [...new Set(this.ingredientsTags[key][lang])];
                }
            }
            console.log(`Copy and paste below into ingredientsTags.json:

${JSON.stringify(sortedObject)}`);
        }
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
        flex-grow: 1;
        margin-top: 2rem;
        text-align: center;
    }
}
</style>