<template>
    <button class="btn btn--icon btn--settings" @click="openModal">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path
                d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
        </svg>
    </button>

    <dialog :id="dialogId">
        <header>
            <span>{{ translation.settingsModal?.settings[lang.current] }}</span>
            <button @click="closeModal" class="btn btn--icon btn--close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
                </svg>
            </button>
        </header>
        <main>
            <settingsModalLang />
            <SettingsModalBaseSize />
        </main>
    </dialog>
</template>

<script setup lang="ts">
import settingsModalLang from './SettingsModalLang.vue';
import SettingsModalBaseSize from './SettingsModalBaseSize.vue';
</script>

<script lang="ts">
import { inject } from 'vue';
export default {
    data() {
        return {
            dialogId: 'settingsModal',
            lang: inject('lang') as any,
            translation: inject('translation') as any,
            modalElem: document.querySelector('dialog#settingsModal') as HTMLDialogElement | null,
        }
    },
    mounted() {
        this.modalElem = document.querySelector(`#${this.dialogId}`);
    },
    methods: {
        openModal() {
            this.modalElem?.showModal();
        },
        closeModal() {
            this.modalElem?.close();
        }
    }
}
</script>

<style scoped>
.btn {
    &.btn--settings {
        margin: 0;
        margin-left: auto;
        border: 0;
        background: var(--white);
        appearance: none;
        fill: var(--gray-900);

        &:hover {
            background: var(--gray-300);
        }
    }
}

dialog {
    --dialog-mw: calc(var(--container-mw) - calc(1rem * 2));
    --dialog-mh: calc(100% - calc(1rem * 2));
    box-sizing: border-box;
    border: 0;
    border-radius: .5rem;
    padding: 0;
    width: 100%;
    max-width: var(--dialog-mw);
    max-height: var(--dialog-mh);

    &::backdrop {
        background-color: var(--gray-900);
        opacity: .5;
    }

    @media (min-width: 576px) {
        --container-mw: calc(540px);
    }

    &:popover-open {
        display: flex;
        flex-direction: column;
    }
}

header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 1rem;
    border-bottom: 1px solid var(--gray-300);
    background-color: var(--white);

    .btn--close {
        margin-left: auto;
        border: 1px solid transparent;
        padding: 0;
        background: transparent;
        appearance: none;
        fill: var(--gray-900);

        svg {
            width: 100%;
            height: 100%;
        }
    }
}

main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem 2rem;
    font-size: .875rem;
    overflow: auto;

    @media (min-width: 48rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 2fr;
    }
}
</style>