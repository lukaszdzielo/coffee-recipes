<script lang="ts">
export default {
    props: ['recipe'],
}
</script>

<template>


    <dialog id="recipeDialog" popover="manual">
        <header>
            <button popovertarget="recipeDialog" @click="$emit('close')">Close</button>
            <div v-show="recipe.name" class="name">{{ recipe.name }}</div>
        </header>
        <main>
            <section v-if="recipe.ingredients" class="ingredients">
                <span class="heading">Składniki:</span>
                <ul v-show="recipe.ingredients">
                    <li v-for="listItem of recipe.ingredients">
                        <template v-if="typeof listItem === 'object'">
                            <template v-if="true">{{ listItem[0] }}</template>
                            <ul>
                                <li v-for="subListItem of listItem.slice(1)">{{ subListItem }}</li>
                            </ul>
                        </template>
                        <template v-else>{{ listItem }}</template>
                    </li>
                </ul>
            </section>
            <section v-if="recipe.preparation" class="preparation">
                <span class="heading">Przygotowanie:</span>
                <div v-html="recipe.preparation"></div>
            </section>
        </main>
    </dialog>
</template>

<style scoped>
dialog {
    --dialog-mw: calc(var(--container-mw) - calc(1rem * 2));
    --dialog-mh: calc(100% - calc(1rem * 2));
    box-sizing: border-box;
    border: 0;
    border-radius: .5rem;
    padding: 0;
    max-width: var(--dialog-mw);
    max-height: var(--dialog-mh);

    &::backdrop {
        background-color: #212121;
        opacity: .5;
    }

    @media (min-width: 576px) {
        --container-mw: calc(540px);
    }

    @media (min-width: 48rem) {
        --container-mw: 720px;
    }

    @media (min-width: 992px) {
        --container-mw: 960px;
    }

    &:popover-open {
        display: flex;
        flex-direction: column;
    }
}

header {
    position: sticky;
    top: 0;
    padding: 1rem;
    background-color: #fff;
}

main {
    display: grid;
    gap: 16px;
    padding: 0 1rem 2rem;

    @media (min-width: 48rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 2fr;
    }
}

.heading {
    display: block;
    margin-bottom: .5rem;
    font-weight: bold;
}

::v-deep :is(ul, ol, p) {
    margin: 0;
}

::v-deep .preparation {
    :is(li+li, p+p) {
        margin-top: 1rem;
    }
}
</style>