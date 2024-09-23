<script>
import AppMain from './components/AppMain.vue';
import { store } from './store'

export default {
  components: {
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
</template>

<style lang="scss"></style>
