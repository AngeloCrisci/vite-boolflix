<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <AppMain />
  <AppHeader />
</template>

<style lang="scss"></style>
