<script lang="ts">
export default {
    props: {
        slug: {
            type: String,
        },
        name: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
    },
}
</script>

<template>
    <div class="card" @click="$emit('open', slug)">
        <img v-if="thumbnail" :src="thumbnail" :alt="name">
        <div class="card__content">{{ name }}</div>
    </div>
</template>

<style>
.card {
    border: 1px solid black;
    border-radius: 8px;

    & .card__content {
        padding: 8px 12px;
    }
}
</style>