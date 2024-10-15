<template>
    <div>{{ lang.current }}</div>
    <hr>
    <div>{{ recipe.langs }}</div>
    <hr>
    <dialog id="recipeDialog" popover="manual">
        <header>
            <div class="header__image">
                <img v-if="recipe.thumbnail" :src="recipe.thumbnail" :alt="recipe.name">
                <img v-else="data.thumbnail" :src="thumbnailDefault" :alt="recipe.name">
            </div>
            <div v-show="getRecipe('name')" class="header__heading">{{ getRecipe('name') }}</div>
            <button popovertarget="recipeDialog" @click="$emit('close')" class="btn btn--icon btn--close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
                </svg>
            </button>
        </header>
        <div class="dialog__wrapper">
            <div v-if="!recipe.langs?.[lang.current]" class="noTranslationInfo"> {{
                translation.recipeModal?.noTranslation[lang.current] }}</div>
            <main>
                <section v-if="getRecipe('ingredients')" class="ingredients">
                    <span class="heading">{{ translation.recipeModal?.ingredients[lang.current] }}</span>
                    <ul v-show="getRecipe('ingredients')">
                        <li v-for="listItem of getRecipe('ingredients')">
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
                <section v-if="getRecipe('preparation')" class="preparation">
                    <span class="heading">{{ translation.recipeModal?.preparation[lang.current] }}</span>

                    <div v-html="getRecipe('preparation')"></div>
                </section>
            </main>
        </div>
    </dialog>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
    props: ['recipe'],
    data() {
        return {
            lang: inject('lang') as any,
            translation: inject('translation') as any,
            thumbnailDefault: 'recipes/img/recipeCard-placeholder.svg',
        }
    },
    computed: {
        getLanguage() {
            return this.recipe.langs?.[this.lang.current] ? this.lang.current : this.recipe.langs?.langDefault;
        }
    },
    methods: {
        getRecipe(content: string) {
            return this.recipe.langs?.[this.getLanguage]?.[content]
        },
    }
}
</script>

<style scoped>
dialog {
    --dialog-mw: calc(var(--container-mw) - calc(1rem * 2));
    --dialog-mh: calc(100% - calc(1rem * 2));
    box-sizing: border-box;
    border: 0;
    border-radius: .5rem;
    padding: 0;
    width: 100%;
    max-width: var(--dialog-mw);
    max-height: var(--dialog-mh);

    &::backdrop {
        background-color: var(--gray-900);
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
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 1rem;
    border-bottom: 1px solid var(--gray-400);
    background-color: var(--white);

    .header__image {
        flex-shrink: 0;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: .25rem;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: auto;
        }
    }

    .header__heading {
        align-self: center;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.2;
        text-wrap: balance;
    }

    .btn--close {
        margin-left: auto;
        border: 1px solid transparent;
        padding: 0;
        background: transparent;

    }
}

.dialog__wrapper {
    overflow: auto;
}

main {
    display: grid;
    gap: 1rem;
    padding: 1rem 1rem 2rem;
    font-size: .875rem;

    @media (min-width: 48rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 2fr;
    }

    .heading {
        display: block;
        margin-bottom: .5rem;
        font-weight: bold;
        font-size: 1rem;
    }

    :deep(:is(ul, ol, p)) {
        margin: 0;
    }

    :deep(.preparation) {

        :is(li+li, p+p) {
            margin-top: 1rem;
        }
    }
}

.noTranslationInfo {
    padding: .5rem 1rem .5rem;
    background-color: #ffc107;
    color: #332701;
    text-align: center;
}
</style>