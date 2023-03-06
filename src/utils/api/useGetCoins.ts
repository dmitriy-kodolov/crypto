import { API_URL } from '@/utils/constans/API_URL';
import getFetcher from '@/utils/helpers/getFetcher';
import useSWR from 'swr';

export type CoinInfo = {
  id: number;
  name: string;
  category: string;
  circulatingSupply: number;
  slug: string;
  values: {
    USD: {
      price: number;
    };
  };
};

export type APICoinInfo = {
  data: CoinInfo[];
};

const useGetCoins = () => {
  const { data, ...rest } = useSWR<APICoinInfo, Error>(API_URL.COIN_LIST.GET_LIST, getFetcher);

  return { coins: data, ...rest };
};

export default useGetCoins;
