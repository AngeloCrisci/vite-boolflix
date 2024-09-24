<script>
import notFound from '../assets/notfound.jpg'
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
        },
        getStars(vote) {
            return Math.round(vote / 2);
        }
    },
    computed: {
        getPoster() {
            const url = "https://image.tmdb.org/t/p/w342/"
            const urlImage = this.result.poster_path
            return this.result.poster_path ? `${url}${urlImage}` : notFound;
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
        <li>
            <img :src="getPoster" alt="Poster">
        </li>
        <li>
            <p class="stars mb-2">
                <i v-for="n in 5" :class="n <= getStars(result.vote_average) ? 'bi bi-star-fill' : 'bi bi-star'"
                    :key="n"></i>
            </p>
        </li>
    </ul>
</template>

<style scoped>
li {
    color: white;
}
</style>