<script>
import HeaderButton from './HeaderButton.vue'
import { store } from '../store'
import axios from 'axios'
export default {
    name: 'HeaderSearchBar',
    components: {
        HeaderButton,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getApi() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${this.query}` || `https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${this.query}`, {

            })
                .then((response) => {
                    console.log(response.data);
                    store.results = response.data.results;
                    console.log(store.results)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        },

        getTextValue() {
            console.log('getTextValue');
            console.log(store.searchValueText);
            this.query = store.searchValueText
            this.getApi()
            console.log(this.getApi)

        }
    }
}
</script>

<template>
    <input v-model="store.searchValueText" class="form-control" type="text"
        placeholder="Search for something on Boolflix">
    <HeaderButton @searched-value="getTextValue" />
</template>

<style></style>