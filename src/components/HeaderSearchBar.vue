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
            query: '',
        }
    },
    methods: {
        getApi() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${query}`, {

            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        },

        getTextValue(query) {
            console.log('getTextValue');
            console.log(store.searchValueText);
            store.searchValueText = query;
            this.getApi();
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