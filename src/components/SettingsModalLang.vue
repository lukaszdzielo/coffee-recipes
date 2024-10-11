<script lang="ts">
export default {
    data() {
        return {
            pageLang: 'en',
            langList: [],
        }
    },
    created() {
        this.fetchData();
    },
    mounted() {

    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('./langs.json');

                const json = await response.json();
                this.langList = json.langList;
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>

<template>
    <section class="lang">
        <span>Language</span>

        <select>
            <option v-for="lang of langList">{{ lang }}</option>
        </select>

    </section>
</template>
<style scoped>
.lang {
    display: flex;
    align-items: center;
    width: 100%;

    span {
        margin-right: auto
    }
}

select {
    border: 1px solid var(--gray-300);
    border-radius: .375rem;
    padding: 0 2rem 0 .375rem;
    height: 2rem;
    background-color: transparent;
    color: var(--gray-900);
    font-size: 1rem;
}
</style>