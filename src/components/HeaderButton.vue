<script>
import { store } from '../store'
export default {
    name: 'HeaderButton',
    data() {
        return {
            store,
        }
    },
    methods: {
        GetSearchValue() {
            this.$emit('searched-value', this.store.searchValueText)
        }
    }
}
</script>

<template>
    <button @click="GetSearchValue" type="button" class="btn btn-danger">Search</button>
</template>

<style></style>