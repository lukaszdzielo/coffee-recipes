<script setup lang="ts">
import SettingsModal from './SettingsModal.vue';
</script>
<script lang="ts">
export default {
    components: {
        SettingsModal,
    },
}
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