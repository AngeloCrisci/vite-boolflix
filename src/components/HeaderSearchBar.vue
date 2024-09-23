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
        getMovie(parameters) {
            axios
                .get()

        },

        getTextValue() {
            console.log('getTextValue');
            console.log(store.searchValueText);
            const parameters = {
                //api
                //query (store.searchValueText)
                //languages
            }
            this.getMovie(parameters)

            //this.store.searchValueText = store.searchValueText;
        }
    }
}
</script>

<template>
    <input v-model="store.searchValueText" class="form-control" type="text">
    <HeaderButton @searched-value="getTextValue" />
</template>

<style></style>