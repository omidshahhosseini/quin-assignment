import Axios from 'axios';

const axios = Axios.create({
  baseURL: '',
});

export { axios as apiClient };
