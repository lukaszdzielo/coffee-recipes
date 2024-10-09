<script setup lang="ts">
import SettingsModal from './SettingsModal.vue';
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
            <SettingsModal />
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--gray-400);
}
</style>