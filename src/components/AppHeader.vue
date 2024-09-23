<script>
import { store } from '../store'
import HeaderSearchBar from './HeaderSearchBar.vue'
export default {
    name: 'AppHeader',
    components: {
        HeaderSearchBar,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section id="nav-bar" class="d-flex">
        <h1>BOOLFLIX</h1>
        <HeaderSearchBar />
    </section>

</template>

<style scoped lang="scss">
h1 {
    color: rgb(128, 15, 15);
}
</style>