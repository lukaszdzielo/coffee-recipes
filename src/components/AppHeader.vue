<script setup lang="ts">
import SettingsModal from './SettingsModal.vue';
</script>

<template>
    <header>
        <div class="container">
            <SettingsModal />
        </div>
    </header>
</template>

<style scoped>
header {
    padding-block: .5rem;
    background-color: var(--gray-200);
}
</style>