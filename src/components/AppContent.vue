<script>
import { store } from '../store';
import ContentMain from './ContentMain.vue';

export default {
    name: 'AppContent',
    components: {
        ContentMain,
    },
    data() {
        return {
            store,
        }
    }
}


</script>

<template>
    <div id="jumbotron" class="container row">
        <ContentMain v-for="result in store.results" :key="result.id" :result="result" />
    </div>
</template>

<style></style>