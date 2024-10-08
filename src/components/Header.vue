<script setup lang="ts">
import settingsModal from './settingsModal.vue';
</script>

<template>
    <header>
        <div class="container">
            <div>
                ----------
            </div>
            <settingsModal />
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--gray-400);
}
</style>