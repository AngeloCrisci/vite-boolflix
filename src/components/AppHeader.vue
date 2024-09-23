<script>
import HeaderButton from './HeaderButton.vue'
import HeaderSearchBar from './HeaderSearchBar.vue'
export default {
    name: 'AppHeader',
    components: {
        HeaderButton,
        HeaderSearchBar,
    }
}
</script>

<template>
    <h1>BOOLFLIX</h1>
    <HeaderButton />
    <HeaderSearchBar />
</template>

<style></style>