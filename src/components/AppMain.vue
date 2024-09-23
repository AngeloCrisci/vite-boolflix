<script>
import { store } from '../store';
import AppHeader from './AppHeader.vue';
import AppContent from './AppContent.vue';
export default {
    name: 'AppMain',
    components: {
        AppHeader,
        AppContent,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <AppHeader />
    <AppContent />
</template>

<style></style>