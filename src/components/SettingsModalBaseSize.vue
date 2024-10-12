<template>
    <section class="baseSize">
        <span>Page base size</span>

        <div class="btn__group">
            <button class="btn btn--icon btn--minus" @click="decreaseSize" :disabled="pageBaseSize <= 12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z" />
                </svg>
            </button>
            <div class="baseSize__current">{{ pageBaseSize }}</div>
            <button class="btn btn--icon btn--plus" @click="increaseSize" :disabled="pageBaseSize >= 20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                        d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                </svg>
            </button>
        </div>
        <button class="btn btn--icon btn--reset" @click="resetSize" :disabled="pageBaseSize == 16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-70q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v200q0 17-11.5 28.5T760-520H560q-17 0-28.5-11.5T520-560q0-17 11.5-28.5T560-600h128q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q68 0 124.5-34.5T692-367q8-14 22.5-19.5t29.5-.5q16 5 23 21t-1 30q-41 80-117 128t-169 48Z" />
            </svg>
        </button>
    </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            pageBaseSize: 16,
        }
    },
    mounted() {
        const localRemSize = localStorage.getItem('pageBaseSize');
        if (localRemSize) {
            this.pageBaseSize = +(localRemSize || this.pageBaseSize)
            this.setHtmlSize();
        }
    },
    methods: {
        increaseSize() {
            this.pageBaseSize++;
            this.setHtmlSize();
        },

        decreaseSize() {
            this.pageBaseSize--;
            this.setHtmlSize();
        },

        resetSize() {
            this.pageBaseSize = 16;
            this.setHtmlSize();
        },

        setHtmlSize() {
            if (this.pageBaseSize === 16) {
                document.documentElement.style.removeProperty('font-size');
                localStorage.removeItem('pageBaseSize');

            } else {
                document.documentElement.style.fontSize = `${this.pageBaseSize}px`;
                localStorage.setItem('pageBaseSize', `${this.pageBaseSize}`);
            }
        }
    }
}
</script>

<style scoped>
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

        @media (hover: hover) {
            &:hover {
                background: var(--gray-100);
            }
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
        padding: 0 .5rem;
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