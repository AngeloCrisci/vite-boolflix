import {reactive} from 'vue';
import axios from 'axios';



export const store = reactive({
    searchValueText:'',
    loading: true,
    apiKey: 'a0694cf66712cb913e337ae588622495',
    results:'',
});