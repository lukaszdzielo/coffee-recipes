<script lang="ts">
export default {
    props: ['recipe'],
}
</script>

<template>
    <div class="card">
        {{ recipe.name }}
    </div>
</template>