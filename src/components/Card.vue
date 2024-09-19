<script lang="ts">
export default {
    props: ['recipe'],
    methods: {
        handleClick(recipe: any, name: string) {
            console.log('--', recipe, recipe.name)
        }
    }
}
</script>

<template>
    <div class="card" @click="handleClick(recipe, recipe.name)">
        {{ recipe.name }}
    </div>
</template>