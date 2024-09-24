<script>
import { store } from '../store';

export default {
    name: 'ContentMain',
    props: {
        result: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getFlag(languageCode) {
            const changeFlag = {
                en: 'gb',
                pt: 'br',
                zh: 'cn',
                ja: 'jp',
                ko: 'kr'
            };
            const countryInitial = changeFlag[languageCode] || languageCode;
            return `https://flagcdn.com/w40/${countryInitial}.png`;
        }
    }
}


</script>

<template>
    <ul>
        <li>{{ result.original_title }}</li>
        <li>
            <img :src="getFlag(result.original_language)" alt="flag">
        </li>
        <li>{{ result.title }}</li>
        <li> {{ result.vote_average }}</li>
    </ul>
</template>

<style scoped>
li {
    color: white;
}
</style>