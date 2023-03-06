const API_URL = {
  COIN_LIST: {
    GET_LIST: `v1/currencies?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  },
  COIN: {
    GET_COIN_INFO: (name: string) => `/v0/coins/${name}`,
  },
};

export { API_URL };
