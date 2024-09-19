<script lang="ts">
export default {
    data() {
        return {
            // show: true,
        }
    },
    methods: {

    }
}
</script>

<template>
    <!-- :open="show" -->
    <dialog class="recipeDialog" open>
        <button class="recipeDialog__close">show</button>
        <div class="recipeDialog__name">name</div>
        <div class="recipeDialog__ingredients">ingredients</div>
        <div class="recipeDialog__preparation">preparation</div>
    </dialog>
</template>