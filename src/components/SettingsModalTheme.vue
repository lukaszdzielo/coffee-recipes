<template>
    <section class="theme">
        <span>{{ translation?.settingsModal?.theme?.[lang.current] }}</span>
        <div class="customSelect">
            <select @change="change($event)">
                <option value="auto">Auto</option>
                <option v-for="theme of themes" :value="theme" :selected="'123' === theme">
                    {{ capitalizeFirstLetter(theme) }}
                </option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="undefined">
                <path
                    d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" />
            </svg>
        </div>
    </section>

</template>

<script lang="ts">
import { inject } from 'vue';
export default {
    data() {
        return {
            local: localStorage.getItem('pageLang'),
            lang: inject('lang') as any,
            translation: inject('translation') as any,
            themes: ["light", "dark"],
            theme: localStorage.getItem('appScheme'),
        };
    },
    created() {
        const currentTheme: any = this.getStorageScheme() || this.setStorageScheme('auto');
        document?.firstElementChild?.setAttribute('color-scheme', currentTheme);
    },
    methods: {
        change(e: any) {
            this.setScheme(e.target.value)
            this.setStorageScheme(e.target.value)
        },
        getStorageScheme() {
            return localStorage.getItem('appScheme');
        },

        setStorageScheme(value: string) {
            localStorage.setItem('appScheme', value)
        },

        setScheme(value: string) {
            document?.firstElementChild?.setAttribute('color-scheme', value);
        },

        capitalizeFirstLetter(value: string) {
            return value.charAt(0).toUpperCase() + String(value).slice(1);
        }
    }
};
</script>

<style scoped>
.theme {
    display: flex;
    align-items: center;
    width: 100%;

    span {
        margin-right: auto
    }
}

.customSelect {
    position: relative;
    display: flex;
    align-items: center;

    select {
        border-radius: .375rem;
        padding: 0 2rem 0 .75rem;
        height: 2rem;
        font-size: 1rem;
        appearance: none;
        transition: .3s;

        &:not(:disabled) {
            border-color: var(--borderColor);
            background-color: var(--bg);
            color: var(--color);
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    border-color: var(--borderColor--hover);
                    background-color: var(--bg--hover);
                    color: var(--color--hover);
                }
            }

            &:active {
                border-color: var(--borderColor--active);
                background-color: var(--bg--active);
                color: var(--color--active);
            }
        }

        &:disabled {
            opacity: 1;
            border-color: var(--borderColor--disabled);
            background: var(--bg--disabled);
            color: var(--color--disabled);
        }
    }

    svg {
        position: absolute;
        right: 0;
        width: 2rem;
        height: 2rem;
        pointer-events: none;
        transition: .3s;
    }

    &:has(select:not(:disabled)) {
        fill: var(--icon--color);

        &:has(select:hover) {
            fill: var(--icon--color--hover);
        }

        &:has(select:active) {
            fill: var(--icon--color--active);
        }
    }

    &:has(select:disabled) {
        fill: var(--icon--color--disabled);
    }
}
</style>