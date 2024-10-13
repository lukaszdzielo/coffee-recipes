<template>
    <!-- <small style="color: var(--gray-300)"><code>App: {{ lang }}</code></small> -->
    <section class="lang">
        <span>Język</span>

        <div class="customSelect">
            <!-- <select @change="change($event)">
                <option value="auto">auto</option>
                <option v-for="lang of langList" :value="lang">{{ lang }}</option>
            </select> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path
                    d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" />
            </svg>
        </div>

    </section>
</template>

<script lang="ts">
export default {
    inject: ['lang'],
    created() {
        // this.langDefault = navigator.language;
        // const localLang = localStorage.getItem('lang');
        // if (localLang) {
        //     // this.pageBaseSize = +(localRemSize || this.pageBaseSize)
        // }

        // this.fetchData();
    },
    methods: {
        // async fetchData() {
        //     try {
        //         const response = await fetch('./langs.json');
        //         const json = await response.json();
        //         this.langList = json.langList || [];
        //     } catch (error) {
        //         console.error(error);
        //     }
        // },
        // change(e: any) {
        //     const selectedValue:String = e.target.value || '';
        //     this.lang.current = selectedValue;
        //     // this.setHtmlLang(lang);

        //     // if (e.target.value === 'auto' || this.langDefault === e.target.value) {
        //     //     console.log('??', localStorage.getItem('lang'));

        //     //     // var storedNames = JSON.parse(localStorage.getItem("names"));
        //     //     // console.log('aaauuttoo');
        //     //     this.lang = this.langDefault;
        //     //     localStorage.removeItem('lang');
        //     //     this.setHtmlSize();
        //     // } else {
        //     //     // console.log('lang', e.target.value);
        //     //     // localStorage.setItem('lang', `${e.target.value}`);
        //     //     this.lang = e.target.value;
        //     //     console.log('??', this.lang);

        //     //     const lang = {
        //     //         default: this.langDefault,
        //     //         selected: e.target.value,
        //     //     };
        //     //     localStorage.setItem('lang', JSON.stringify(lang));
        //     //     this.setHtmlSize();
        //     // }
        // },
        // setHtmlSize() {
        //     // document.documentElement.lang = this.lang
        // }
    }
}
</script>

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
    cursor: pointer;
}
</style>