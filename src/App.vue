<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <AppMain />
  <AppHeader />
</template>

<style lang="scss">
@use 'style.css';
</style>
