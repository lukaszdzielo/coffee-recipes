<script setup lang="ts">
import Card from './Card.vue';
</script>

<script lang="ts">
export default {
    props: {

    },
    data() {
        return {
            recipes: {},
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('recipes.json');
                this.recipes = await response.json();
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<template>
    <div class="list">
        <Card :recipe="recipe" v-for="recipe in recipes" />
    </div>
</template>