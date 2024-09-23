<script>
import { store } from '../store';

export default {
    name: 'ContentMain',
    props: {
        result: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            store,
        }
    }
}


</script>

<template>
    <ul>
        <li>{{ result.original_title }}</li>
        <li>{{ result.original_language }}</li>
        <li>{{ result.title }}</li>
        <li> {{ result.vote_average }}</li>
    </ul>
</template>

<style scoped>
li {
    color: white;
}
</style>