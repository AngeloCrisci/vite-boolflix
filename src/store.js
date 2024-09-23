import {reactive} from 'vue';
import axios from 'axios';

const apiKey = 'a0694cf66712cb913e337ae588622495';

export const store = reactive({
    searchValueText:'',
    loading: true,
});