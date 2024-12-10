<template>
    <button class="btn btn--icon btn--settings" @click="openModal">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined">
            <path
                d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
        </svg>
    </button>

    <dialog :id="dialogId">
        <header>
            <span>{{ translation?.settingsModal?.settings?.[lang.current] }}</span>
            <button @click="closeModal" class="btn btn--icon btn--close">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="undefined">
                    <path
                        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
                </svg>
            </button>
        </header>
        <main>
            <settingsModalTheme />
            <settingsModalLang />
            <SettingsModalBaseSize />
        </main>
    </dialog>
</template>

<script setup lang="ts">
import settingsModalTheme from './SettingsModalTheme.vue';
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
        --borderColor: var(--white);
        --bg: var(--white);
        margin: 0;
        margin-left: auto;
        appearance: none;
        fill: var(--gray-900);

        &:not(:disabled) {
            @media (hover:hover) {
                &:hover {
                    --borderColor: var(--gray-300);
                    --bg: var(--gray-300);
                }
            }

            &:active {
                --borderColor: var(--gray-400);
                --bg: var(--gray-400);
            }
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
        background-color: var(--modal--backdrop--bg);
        opacity: var(--modal--backdrop--opacity);
    }

    @media (min-width: 576px) {
        --container-mw: calc(540px);
    }
}

header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 1rem;
    border-bottom: 1px solid var(--modal--borderColor);
    background-color: var(--modal--bg);
    color: var(--modal--color);

    .btn--close {
        margin-left: auto;
        padding: 0;
        background: transparent;
        appearance: none;
        fill: var(--modal--close--color);

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
    background-color: var(--modal--bg);
    color: var(--modal--color);
    font-size: .875rem;
    overflow: auto;

    @media (min-width: 48rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 2fr;
    }
}

section {
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--color);

    & :deep(span) {
        margin-right: auto
    }

}

:deep(.customSelect) {
    --borderColor: light-dark(var(--gray-300), var(--gray-600));
    --bg: transparent;
    --color: var(--app--color);
    --icon--color: var(--app--color);

    position: relative;
    display: flex;
    align-items: center;

    select {
        border-radius: .375rem;
        padding: 0 2.25rem 0 .75rem;
        height: 2rem;
        font-size: 1rem;
        appearance: none;
        transition: background-color .3s, border-color .3s, color .3s;

        &:not(:disabled) {
            border-color: var(--borderColor);
            background-color: var(--bg);
            color: var(--color);
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    --borderColor: light-dark(var(--gray-200), var(--gray-500));
                    --bg: light-dark(var(--gray-100), var(--gray-800));
                }
            }

            &:active {
                --borderColor: light-dark(var(--gray-400), var(--gray-400));
                --bg: light-dark(var(--gray-200), var(--gray-700));
            }
        }

        &:disabled {
            opacity: 1;
            --borderColor: light-dark(var(--gray-300), var(--gray-700));
            --bg: light-dark(var(--gray-200), var(--gray-800));
            --color: light-dark(var(--gray-400), var(--gray-600));
        }
    }

    svg {
        position: absolute;
        right: .25rem;
        width: 2rem;
        height: 2rem;
        pointer-events: none;
        transition: fill .3s;
        fill: var(--icon--color);
    }

    &:has(select:not(:disabled)) {
        --icon--color: var(--app--color);
    }

    &:has(select:disabled) {
        --icon--color: light-dark(var(--gray-400), var(--gray-600));
    }
}

:deep(.baseSize) {
    --borderColor: light-dark(var(--gray-300), var(--gray-600));
    --color: var(--app--color);
    --icon--color: var(--app--color);

    .btn__group {
        display: flex;

        .btn {
            border-radius: 0;
        }

        >*:first-child {
            border-start-start-radius: .375rem;
            border-end-start-radius: .375rem;
        }

        >*:last-child {
            border-start-end-radius: .375rem;
            border-end-end-radius: .375rem;
        }
    }

    .baseSize__current {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 -1px;
        padding: 0 .5rem;
        height: 2rem;
        border: 1px solid light-dark(var(--gray-300), var(--gray-600));
        background: transparent;
        line-height: 1;
        box-sizing: border-box;
    }

    .btn {
        --bg: transparent;
        --borderColor: light-dark(var(--gray-300), var(--gray-600));
        --fill: var(--app--color);

        background-color: var(--bg);
        border-color: var(--borderColor);
        color: var(--app--color);
        fill: var(--fill);
        appearance: none;

        &:not(:disabled) {
            @media (hover: hover) {
                &:hover {
                    --bg: light-dark(var(--gray-100), var(--gray-800));
                }
            }

            &:active {
                --bg: light-dark(var(--gray-200), var(--gray-700));
            }
        }

        &:disabled {
            --bg: light-dark(var(--gray-300), var(--gray-700));
            --fill: light-dark(var(--gray-400), var(--gray-600));
        }

        &.btn--reset {
            margin-left: .5rem;
        }
    }

}
</style>