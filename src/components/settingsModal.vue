<script lang="ts">
export default {
    data() {
        return {
            pageRemSize: 16,
        }
    },
    mounted() {
        console.log('?', this.pageRemSize);

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
    <button popovertarget="settingsModal">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path
                d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
        </svg>
    </button>

    <dialog id="settingsModal" popover="manual">
        <header>
            <div class="header__heading">Settings</div>
            <button popovertarget="settingsModal" class="btn--close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#212121">
                    <path
                        d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
                </svg>
            </button>
        </header>
        <main>
            <section class="remSize">
                <span>Page base size</span>

                <div class="btn__group">
                    <button class="btn btn--minus" @click="decreaseSize" :disabled="pageRemSize <= 8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z" />
                        </svg>
                    </button>
                    <div class="remSize__current">{{ pageRemSize }}</div>
                    <button class="btn btn--plus" @click="increaseSize" :disabled="pageRemSize >= 32">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                        </svg>
                    </button>
                </div>
                <button class="btn btn--reset" @click="resetSize">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24" xml:space="preserve">
                        <path d="M22,12c0,1.4-0.3,2.7-0.8,3.9c-0.5,1.2-1.2,2.3-2.1,3.2s-2,1.6-3.2,2.1C14.7,21.7,13.4,22,12,22
	c-1.3,0-2.5-0.2-3.6-0.7s-2.2-1.1-3-1.9c-0.9-0.8-1.6-1.7-2.2-2.8s-0.9-2.2-1.1-3.5c0-0.3,0-0.6,0.2-0.7c0.2-0.2,0.4-0.3,0.7-0.3
	c0.3,0,0.5,0,0.7,0.2C3.9,12.4,4,12.6,4.1,13c0.3,2,1.1,3.7,2.6,5c1.5,1.3,3.3,2,5.3,2c2.2,0,4.1-0.8,5.7-2.3
	c1.5-1.5,2.3-3.4,2.3-5.7s-0.8-4.1-2.3-5.7C16.1,4.8,14.2,4,12,4c-1.5,0-2.8,0.4-4,1.1S5.8,6.8,5.1,8H7c0.3,0,0.5,0.1,0.7,0.3
	C7.9,8.5,8,8.7,8,9S7.9,9.5,7.7,9.7C7.5,9.9,7.3,10,7,10H3c-0.3,0-0.5-0.1-0.7-0.3C2.1,9.5,2,9.3,2,9V5c0-0.3,0.1-0.5,0.3-0.7
	C2.5,4.1,2.7,4,3,4s0.5,0.1,0.7,0.3C3.9,4.5,4,4.7,4,5v1c0.9-1.2,2.1-2.2,3.5-2.9S10.4,2,12,2c1.4,0,2.7,0.3,3.9,0.8
	s2.3,1.2,3.2,2.1s1.6,2,2.1,3.2C21.7,9.3,22,10.6,22,12z" />
                    </svg>
                </button>
            </section>
        </main>
    </dialog>
</template>
<style scoped>
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
        background-color: #212121;
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
    gap: .75rem;
    padding: 1rem;
    border-bottom: 1px solid #E0E0E0;
    background-color: #fff;
}

.btn--close {
    flex-shrink: 0;
    align-self: flex-start;
    margin-top: -.75rem;
    margin-right: -.75rem;
    margin-left: auto;
    border: 0;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    appearance: none;
    cursor: pointer;

    & svg {
        width: 100%;
        height: 100%;
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



.remSize {
    display: flex;
    align-items: center;
    width: 100%;

    span {
        margin-right: auto
    }

    ;

    .btn {
        margin: 0;
        border: 0;
        padding: .375rem;
        width: 2rem;
        height: 2rem;
        border: 1px solid var(--gray-300);
        background: transparent;
        appearance: none;
        cursor: pointer;
    }

    .btn__group {
        display: flex;

        >*:first-child {
            border-top-left-radius: .375rem;
            border-bottom-left-radius: .375rem;
        }

        >*:last-child {
            border-top-right-radius: .375rem;
            border-bottom-right-radius: .375rem;
        }
    }

    .remSize__current {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 -1px;
        width: 2rem;
        height: 2rem;
        border: .0625rem solid var(--gray-300);
        background: transparent;
        box-sizing: border-box;
    }

    .btn--reset {
        margin-left: .5rem;
        border-radius: .375rem;
    }

}
</style>