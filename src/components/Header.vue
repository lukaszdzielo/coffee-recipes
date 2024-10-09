<script setup lang="ts">
import Settings from './Settings.vue';
</script>
<script lang="ts">
export default {
    // components: {
    //     settingsModal,
    // },
}
</script>

<template>
    <header>
        <div class="container">
            <Settings />
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--gray-400);
}
</style>