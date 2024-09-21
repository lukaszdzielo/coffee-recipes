<script lang="ts">
export default {
    props: ['data', 'slug']
}
</script>

<template>
    <div class="card" @click="$emit('open', data)">
        <img v-if="data.thumbnail" :src="data.thumbnail" :alt="data.name">
        <div class="card__content">{{ data.name }}</div>
    </div>
</template>

<style>
.card {
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;

    & .card__content {
        padding: 8px 12px;
    }

    img {
        width: 100%;
        max-width: 100%;
    }
}
</style>