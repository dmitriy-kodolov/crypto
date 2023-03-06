import axios from 'axios';

const defaultConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

const DefaultAPIInstance = axios.create(defaultConfig);

export default DefaultAPIInstance;
