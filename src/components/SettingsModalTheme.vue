<template>
    <!-- theme -->
    <section class="theme">
        <!-- <span>{{ translation.settingsModal?.language[lang.current] }}</span> -->
        <div class="customSelect">
            <!-- <select @change="change($event)">
                <option value="auto">auto</option>
                <option v-for="language of translation?.langList" :value="language" :selected="local === language">
                    {{ language.toUpperCase() }}
                </option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="undefined">
                <path
                    d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" />
            </svg> -->
        </div>
    </section>
</template>

<script lang="ts">
import { inject } from 'vue';
export default {
    data() {
        //         return {
        //             local: localStorage.getItem('pageLang'),
        //             lang: inject('lang') as any,
        //             translation: inject('translation') as any,
        //             langChange: inject('langChange') as any,
        //         };
    },
    methods: {
        //         change(e: any) {
        //             this.langChange(e.target.value);
        //             if (e.target.value === 'auto') {
        //                 const defaultLang = this.lang.default;
        //                 this.langChange(defaultLang);
        //                 localStorage.removeItem('pageLang');
        //             } else {
        //                 this.langChange(e.target.value);
        //                 localStorage.setItem('pageLang', e.target.value);
        //             }
        //         },
    }
};
</script>

<style scoped>
/* .lang {
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

    svg {
        position: absolute;
        right: 0;
        width: 2rem;
        height: 2rem;
        pointer-events: none;
    }
}

select {
    border-color: var(--gray-300);
    border-radius: .375rem;
    padding: 0 2rem 0 .75rem;
    height: 2rem;
    background-color: transparent;
    color: var(--gray-900);
    font-size: 1rem;
    appearance: none;

    &:not(:disabled) {
        cursor: pointer;
    }

    &:disabled {
        background: var(--gray-200);
        color: var(--gray-500);
        fill: var(--gray-500);
    }
}

:has(:disabled) {
    svg {
        fill: var(--gray-900);
    }
} */
</style>