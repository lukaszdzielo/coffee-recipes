<script setup lang="ts">
import Card from './Card.vue';
import Dialog from './Dialog.vue';
</script>

<script lang="ts">
export default {
    props: ['recipes'],

    data() {
        return {
            dialogData: {},
        }
    },
}
</script>

<template>
    <div class="list">
        <Card :recipe="recipe" v-for="recipe in recipes" />
    </div>
    <Dialog />
</template>