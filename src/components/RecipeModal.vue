<script lang="ts">
export default {
    props: ['recipe'],
}
</script>

<template>
    <dialog class="recipeDialog">
        <button class="recipeDialog__close" @click="$emit('close')">Close</button>
        <div v-show="recipe.name" class="recipeDialog__name">{{ recipe.name }}</div>
        <div class="recipeDialog__content">
            <ul v-show="recipe.ingredients" class="recipeDialog__ingredients">
                <li v-for="ingredient of recipe.ingredients">{{ ingredient }}</li>
            </ul>
            <div v-show="recipe.preparation" class="recipeDialog__preparation">{{ recipe.preparation }}</div>
        </div>
    </dialog>
</template>

<style scoped>
.recipeDialog {
    --dialog-mw: calc(var(--container-mw) - calc(1rem * 2));
    box-sizing: border-box;
    border: 0;
    border-radius: .5rem;
    max-width: var(--dialog-mw);

    &::backdrop {
        background-color: #212121;
        opacity: .5;
    }
}

@media (min-width: 576px) {
    .recipeDialog {
        --container-mw: calc(540px);
    }
}

@media (min-width: 48rem) {
    .recipeDialog {
        --container-mw: 720px;
    }
}

@media (min-width: 992px) {
    .recipeDialog {
        --container-mw: 960px;
    }
}

@media (min-width: 1200px) {
    .recipeDialog {
        --container-mw: 1140px;
    }
}

@media (min-width: 1400px) {
    .recipeDialog {
        --container-mw: 1320px;
    }
}

.recipeDialog__content {
    display: grid;
    /* flex-direction: column; */
}

@media (min-width: 48rem) {
    .recipeDialog__content {
        /* flex-direction: row; */
        grid-template-rows: 1fr 2fr;
    }
}
</style>