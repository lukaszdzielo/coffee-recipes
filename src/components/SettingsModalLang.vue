<template>
    <section class="lang">
        <span>Język</span>

        <div class="customSelect">
            <select disabled>
                <option value="auto">auto</option>
                <option v-for="language of langList" :value="language">{{ language }}</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" />
            </svg>
        </div>
    </section>
</template>


<script lang="ts">
export default {
    // inject: ['lang'],
    data() {
        return {
            // lang: this.lang,
            langList: ['en', 'pl', 'it', 'es'],
        };
    },
    created() {
        // this.lang = this.lang || {};
        // console.log('??', this.lang);

        // this.langDefault = navigator.language;
        // const localLang = localStorage.getItem('lang');
        // if (localLang) {
        //     // this.pageBaseSize = +(localRemSize || this.pageBaseSize)
        // }
    },
    methods: {
        change(e: any) {
            console.log('e.target.value', e.target.value);
            // this.fullMessage.c = 's'
            // console.log(this.lang);
            // this.lang.current = e.target.value

            // this.lang.current = e.target.value;
            // this.test.current = e.target.value;
            // console.log('this.test', this.test);


            // if (e.target.value === 'auto' || this.langDefault === e.target.value) {
            //     console.log('??', localStorage.getItem('lang'));

            //     // var storedNames = JSON.parse(localStorage.getItem("names"));
            //     // console.log('aaauuttoo');
            //     this.lang = this.langDefault;
            //     localStorage.removeItem('lang');
            //     this.setHtmlSize();
            // } else {
            //     // console.log('lang', e.target.value);
            //     // localStorage.setItem('lang', `${e.target.value}`);
            //     this.lang = e.target.value;
            //     console.log('??', this.lang);

            //     const lang = {
            //         default: this.langDefault,
            //         selected: e.target.value,
            //     };
            //     localStorage.setItem('lang', JSON.stringify(lang));
            //     this.setHtmlSize();
            // }
        },
    }
};
</script>
























<!-- <template>
    <div>{{ childUserName }}</div>
    <div>{{ childCount }}</div>
    <div>{{ firstName }} {{ lastName }}</div>
    <button @click="incrementCount">+</button>

    
    <small style="color: var(--gray-300)"><code>App: {{ lang }}</code></small>
    <section class="lang">
        <span>Język</span>

        <div class="customSelect">
            <select @change="change($event)">
                <option value="auto">auto</option>
                <option v-for="lang of langList" :value="lang">{{ lang }}</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" />
            </svg>
        </div>

    </section>
</template>

<script lang="ts">
import { inject, toRefs } from 'vue';

export default {
    setup() {
        const childUserName = inject('c_userName', 'default');
        const childCount = inject('c_count', 0);
        const childState = inject('c_state', {});
        const incrementCount = inject('incrementCount');


        return {
            childUserName,
            childCount,
            ...toRefs(childState),
            incrementCount
        };
    },
    data() {
        return {
            langList: ['en', 'pl', 'it', 'es'],
            lang: this.lang,
        }
    },
    created() {
        // this.lang = this.lang || {};
        // console.log('??', this.lang);

        // this.langDefault = navigator.language;
        // const localLang = localStorage.getItem('lang');
        // if (localLang) {
        //     // this.pageBaseSize = +(localRemSize || this.pageBaseSize)
        // }
    },
    methods: {
        change(e: any) {
            console.log('lang selected', e.target.value);

            // this.lang.current = e.target.value;

            // if (e.target.value === 'auto' || this.langDefault === e.target.value) {
            //     console.log('??', localStorage.getItem('lang'));

            //     // var storedNames = JSON.parse(localStorage.getItem("names"));
            //     // console.log('aaauuttoo');
            //     this.lang = this.langDefault;
            //     localStorage.removeItem('lang');
            //     this.setHtmlSize();
            // } else {
            //     // console.log('lang', e.target.value);
            //     // localStorage.setItem('lang', `${e.target.value}`);
            //     this.lang = e.target.value;
            //     console.log('??', this.lang);

            //     const lang = {
            //         default: this.langDefault,
            //         selected: e.target.value,
            //     };
            //     localStorage.setItem('lang', JSON.stringify(lang));
            //     this.setHtmlSize();
            // }
        },
    }
}
</script> -->













<style scoped>
.lang {
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
    border: 1px solid var(--gray-300);
    border-radius: .375rem;
    padding: 0 2rem 0 .75rem;
    height: 2rem;
    background-color: transparent;
    color: var(--gray-900);
    font-size: 1rem;
    /* appearance: none; */
    -webkit-appearance: none;

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
        fill: var(--gray-500);
    }
}
</style>