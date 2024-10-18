<template>
    <header>
        <div class="container">
            Coffee recipes
            <SettingsModal />
        </div>
    </header>
</template>

<script setup lang="ts">
import SettingsModal from './SettingsModal.vue';
</script>

<style scoped>
header {
    padding-block: .5rem;
    background-color: var(--gray-200);
}

.container {
    display: flex;
    align-items: center;
}
</style>