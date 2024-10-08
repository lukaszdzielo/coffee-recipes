<script lang="ts">
export default {
    props: ['recipe'],
    data() {
        return {
            thumbnailDefault: './recipeCard-placeholder.svg',
        }
    }
}
</script>

<template>
    <dialog id="recipeDialog" popover="manual">
        <header>
            <div class="header__image">
                <img v-if="recipe.thumbnail" :src="recipe.thumbnail" :alt="recipe.name">
                <img v-else="data.thumbnail" :src="thumbnailDefault" :alt="recipe.name">
            </div>
            <div v-show="recipe.name" class="header__heading">{{ recipe.name }}</div>
            <button popovertarget="recipeDialog" @click="$emit('close')" class="btn--close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#212121">
                    <path
                        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
                </svg>
            </button>
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
    width: 100%;
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
    display: flex;
    gap: .75rem;
    padding: 1rem;
    border-bottom: .0625rem solid #BDBDBD;
    background-color: #fff;

}

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
    flex-shrink: 0;
    align-self: flex-start;
    margin-top: -.75rem;
    margin-right: -.75rem;
    margin-left: auto;
    border: 0;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    appearance: none;
    cursor: pointer;

    & svg {
        width: 100%;
        height: 100%;
    }
}

main {
    display: grid;
    gap: 1rem;
    padding: 1rem 1rem 2rem;
    font-size: .875rem;
    overflow: auto;

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
    font-size: 1rem;
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