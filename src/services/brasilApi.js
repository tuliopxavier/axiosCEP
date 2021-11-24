import axios from 'axios';

const brasilApi = axios.create({
    baseURL: 'https://brasilapi.com.br/api/cep/v2/'
  });

export default brasilApi;