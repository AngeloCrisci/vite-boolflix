<script>
import { store } from '../store.js'
import HeaderButton from './HeaderButton.vue'
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
        getTextValue(textValue) {
            this.searchValueText = textValue;
        }
    }
}
</script>

<template>
    <input v-model="searchValueText" class="form-control" type="text">
    <HeaderButton @searched-value="getTextValue" />
</template>

<style></style>