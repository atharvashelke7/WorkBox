import axios from 'axios';

const productionUrl = "";

export const customFetch = axios.create({

     baseUrl : productionUrl,

})