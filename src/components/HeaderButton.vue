<script>
export default {
    name: 'HeaderButton',
    data() {
        return {

        }
    },
    methods: {
        GetSearchValue() {
            this.$emit('searched-value', this.searchValueText)
        }
    }
}
</script>

<template>
    <button @click="GetSearchValue" type="button" class="btn btn-danger">Search</button>
</template>

<style></style>