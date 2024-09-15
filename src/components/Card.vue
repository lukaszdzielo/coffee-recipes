<script lang="ts">
export default {
    props: ['recipe'],
}
</script>

<template>
    <div class="card" v-on:click="console.log(recipe)">
        {{ recipe.name }}
    </div>
</template>