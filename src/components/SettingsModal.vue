<script lang="ts">
export default {
    data() {
        return {
            pageRemSize: 16,
        }
    },
    mounted() {
        const localRemSize = localStorage.getItem('pageRemSize');
        if (localRemSize) {
            this.pageRemSize = +(localRemSize || this.pageRemSize)
            this.setHtmlSize();
        }
    },
    methods: {
        increaseSize() {
            this.pageRemSize++;
            this.setHtmlSize();
        },

        decreaseSize() {
            this.pageRemSize--;
            this.setHtmlSize();
        },

        resetSize() {
            this.pageRemSize = 16;
            this.setHtmlSize();
        },

        setHtmlSize() {
            if (this.pageRemSize === 16) {
                document.documentElement.style.removeProperty('font-size');
                localStorage.removeItem('pageRemSize');

            } else {
                document.documentElement.style.fontSize = `${this.pageRemSize}px`;
                localStorage.setItem('pageRemSize', `${this.pageRemSize}`);
            }
        }
    }
}
</script>

<template>
    <button popovertarget="settingsModal" class="btn btn--icon btn--settings">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path
                d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
        </svg>
    </button>

    <dialog id="settingsModal" popover="manual">
        <header>
            <div class="header__heading">Settings</div>
            <button popovertarget="settingsModal" class="btn btn--icon btn--close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
                </svg>
            </button>
        </header>
        <main>
            <section class="baseSize">
                <span>Page base size</span>

                <div class="btn__group">
                    <button class="btn btn--icon btn--minus" @click="decreaseSize" :disabled="pageRemSize <= 12">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z" />
                        </svg>
                    </button>
                    <div class="baseSize__current">{{ pageRemSize }}</div>
                    <button class="btn btn--icon btn--plus" @click="increaseSize" :disabled="pageRemSize >= 20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                        </svg>
                    </button>
                </div>
                <button class="btn btn--icon btn--reset" @click="resetSize" :disabled="pageRemSize == 16">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-70q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v200q0 17-11.5 28.5T760-520H560q-17 0-28.5-11.5T520-560q0-17 11.5-28.5T560-600h128q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q68 0 124.5-34.5T692-367q8-14 22.5-19.5t29.5-.5q16 5 23 21t-1 30q-41 80-117 128t-169 48Z" />
                    </svg>
                </button>
            </section>
        </main>
    </dialog>
</template>
<style scoped>
.btn {
    &.btn--settings {
        margin: 0;
        margin-left: auto;
        border: 0;
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

.baseSize {
    display: flex;
    align-items: center;
    width: 100%;

    span {
        margin-right: auto
    }

    .btn {
        border: 1px solid var(--gray-300);
        background: transparent;
        appearance: none;
        fill: var(--gray-900);

        &:hover {
            background: var(--gray-100);
        }

        &:disabled {
            background: var(--gray-200);
            fill: var(--gray-500);
        }
    }

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
        width: 2rem;
        height: 2rem;
        border: 1px solid var(--gray-300);
        background: transparent;
        line-height: 1;
        box-sizing: border-box;
    }

    .btn--reset {
        margin-left: .5rem;
    }

}
</style>