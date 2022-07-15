import Axios from 'axios';
import config from '../config';

const axios = Axios.create({
  baseURL: config.base_url,
});

export { axios as apiClient };
